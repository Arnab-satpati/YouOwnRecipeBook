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
    setSuggestedRecipe(aiReply.recipe || null);
  };

  const generateReply = (msg) => {
    const keywords = msg.toLowerCase().split(/\s+/);

    const matched = data.find((recipe) =>
      keywords.some((word) =>
        recipe.title.toLowerCase().includes(word) ||
        recipe.description.toLowerCase().includes(word)
      )
    );

    if (matched) {
      return {
        text: (
        <div className="text-left bg-transparent space-y-2">
          <h2 className="text-xl font-bold bg-transparent text-amber-400 drop-shadow-[0_0_5px_#f59e0b]">
            🍽️ How about {matched.title}?
          </h2>
          <p className="bg-transparent text-white/80">{matched.description}</p>
        </div>
      ),
        recipe: matched,
      };
    }

    return {
      text: `🤖 Sorry, I couldn't find an exact recipe match.\nTry giving me some ingredients or a dish name!`,
      recipe: null,
    };
  };

  const handleCreateRedirect = () => {
    if (!aiSuggestion) return;
    const { title, description, image, category } = aiSuggestion;
    navigate('/create', {
      state: {
        title,
        description,
        image,
        category,
      },
    });
  };

  return (
    <div className="flex flex-col bg-transparent gap-4 mt-6 text-white max-w-2xl mx-auto px-4">
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
          className="w-full resize-none bg-transparent border border-amber-500 p-3 rounded-lg focus:outline-none focus:border-amber-400 text-white"
        />
      </div>

      {/* Button Row */}
      <div className="flex bg-transparent flex-wrap justify-end gap-3 mt-2">
        {/* Ask Button */}
        <button
          onClick={handleAskChef}
          className="bg-amber-500 hover:bg-amber-400 px-6 py-2 rounded-lg font-semibold transition-all"
        >
          Ask ChefBot
        </button>

        {/* View Recipe Button */}
        {suggestedRecipe && (
          <button
            onClick={() => navigate(`/recipe/${suggestedRecipe.id}`)}
            className="bg-transparent border border-white/20 text-white hover:border-amber-400 hover:text-amber-400 transition-all px-4 py-2 rounded-full"
          >
            🔍 View Recipe: {suggestedRecipe.title.slice(0,5)} <small className='bg-transparent'>...</small>
          </button>
        )}

        {/* Add to Recipe Book */}
        {aiSuggestion && !suggestedRecipe && (
          <button
            onClick={handleCreateRedirect}
            className="bg-transparent border border-white/20 text-white hover:border-amber-400 hover:text-amber-400 transition-all px-4 py-2 rounded-full"
          >
            💾 Add “{aiSuggestion.title}” to Recipe Book
          </button>
        )}

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
