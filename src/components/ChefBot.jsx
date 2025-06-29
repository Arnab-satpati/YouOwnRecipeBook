import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { recipeContext } from '../context/RecipeContext';

const ChefBot = () => {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [suggestedRecipe, setSuggestedRecipe] = useState(null);
  const [aiSuggestion, setAiSuggestion] = useState(null);
  const navigate = useNavigate();
  const { data } = useContext(recipeContext);

  const handleAskChef = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    const aiReply = generateReply(userMsg.toLowerCase());

    setChatLog((prev) => [
      ...prev,
      { sender: 'user', text: userMsg },
      { sender: 'bot', text: aiReply.text },
    ]);
    setInput('');
    setAiSuggestion(aiReply.recipe || null);

    // Only consider it a "saved" recipe if it exists in data
    const found = data.find((d) => d.title === aiReply.recipe?.title);
    setSuggestedRecipe(found || null);
  };

  const generateReply = (msg) => {
    const keywords = msg.toLowerCase().split(/\s+/);

    // Custom hardcoded suggestion
    if (msg.includes('bread') && msg.includes('egg') && msg.includes('onion')) {
      const customRecipe = {
        title: 'Eggy Masala Toast',
        description: 'Spiced scrambled egg with onion and masala on crispy wholegrain toast.',
        category: 'Breakfast',
        image: 'https://media.istockphoto.com/id/466838148/photo/eating-healthy-breakfast-scrambled-egg-with-wholegrain-toast-and.jpg?s=612x612&w=0&k=20&c=00BX8cktWNypujOYiBtd2W5m4W8Whx7lFO3OauuNZbs=',
        instructions:
          `1. Crack 2 eggs into a bowl, add a pinch of salt, turmeric, and chili powder. Beat well.\n` +
          `2. Heat 1 tsp oil in a pan, add chopped onions and sauté until golden.\n` +
          `3. Add chopped green chili and a pinch of garam masala.\n` +
          `4. Pour in the beaten eggs and scramble on low heat.\n` +
          `5. Toast 2 slices of wholegrain bread until crisp.\n` +
          `6. Top toast with the scrambled masala egg. Garnish with fresh coriander.\n` +
          `7. Serve hot with chutney or ketchup.`,
      };

      return {
        text: (
          <div className="text-left space-y-2 bg-transparent">
            <h2 className="text-xl font-bold text-amber-400 drop-shadow-[0_0_5px_#f59e0b]">
              🍳 Try this: {customRecipe.title}
            </h2>
            <p className="text-white/80">{customRecipe.description}</p>
          </div>
        ),
        recipe: customRecipe,
      };
    }

    // Try matching from recipeContext
    const matched = data.find((recipe) =>
      keywords.some((word) =>
        recipe.title.toLowerCase().includes(word) ||
        recipe.description.toLowerCase().includes(word)
      )
    );

    if (matched) {
      return {
        text: (
          <div className="text-left space-y-2 bg-transparent">
            <h2 className="text-xl font-bold text-amber-400 drop-shadow-[0_0_5px_#f59e0b]">
              🍽️ How about {matched.title}?
            </h2>
            <p className="text-white/80">{matched.description}</p>
          </div>
        ),
        recipe: matched,
      };
    }

    return {
      text: (
        <p className="text-white/70">
          🤖 Sorry, I couldn't find an exact recipe match.
          <br />
          Try giving me some ingredients or a dish name!
        </p>
      ),
      recipe: null,
    };
  };

  const handleCreateRedirect = () => {
    if (!aiSuggestion) return;

    const { title, description, image, category, instructions } = aiSuggestion;
    navigate('/create', {
      state: {
        title,
        description,
        image,
        category,
        instructions,
      },
    });
  };

  return (
    <div className="flex flex-col bg-transparent gap-4 mt-6 text-white max-w-3xl mx-auto px-4">
      {/* Chat Log */}
      <div className="bg-white/5 border border-amber-500/30 rounded-xl p-4 max-h-[13rem] overflow-y-auto scrollbar-hide">
        {chatLog.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 bg-transparent ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/10 text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex flex-col bg-transparent gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={2}
          placeholder="Type your cravings or ingredients here..."
          className="w-full resize-none scrollbar-hide bg-transparent border border-amber-500 p-3 rounded-lg focus:outline-none focus:border-amber-400 text-white"
        />
      </div>

      {/* Button Row */}
      <div className="flex bg-transparent flex-wrap justify-end gap-6 ">
        {/* Ask Button */}
        <button
          onClick={handleAskChef}
          className="bg-amber-500 hover:bg-amber-400 px-6 py-2 rounded-lg font-semibold transition-all"
        >
          Ask ChefBot
        </button>

        {/* View or Add */}
        {suggestedRecipe ? (
          <button
            onClick={() => navigate(`/recipe/${suggestedRecipe.id}`)}
            className="bg-transparent border border-white/20 text-white hover:border-amber-400 hover:text-amber-400 transition-all px-4 py-2 rounded-full"
          >
            🔍 View Recipe: {suggestedRecipe.title.slice(0, 5)}...
          </button>
        ) : aiSuggestion ? (
          <button
            onClick={handleCreateRedirect}
            className="bg-transparent border border-white/20 text-white hover:border-amber-400 hover:text-amber-400 transition-all px-4 py-2 rounded-full"
          >
            💾 Add “{aiSuggestion.title.slice(0,9)}...” to Recipe Book
          </button>
        ) : null}

        {/* See All Recipes */}
        <button
          onClick={() => navigate('/recipe')}
          className="bg-transparent border border-white/20 text-white hover:border-amber-400 hover:text-amber-400 transition-all px-4 py-2 rounded-full"
        >
          🍱 See Our Best Recipes
        </button>
      </div>
    </div>
  );
};

export default ChefBot;
