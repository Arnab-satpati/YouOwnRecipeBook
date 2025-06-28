import React, { useState } from 'react';
import axios from 'axios';

const ChefBot = () => {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const askChef = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post(
  'https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B',
        { inputs: `Human: ${input}\nAssistant:`, parameters: { max_new_tokens: 150 } },
        { headers: { Authorization: `Bearer uydouydouylydfoue` } }
      );

      const text = Array.isArray(res.data) ? res.data[0].generated_text : res.data.generated_text;
      setReply(text.replace(/^Human:.+Assistant:/, '').trim());
    } catch (err) {
      setReply('⚠️ Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={3}
        placeholder="I have potatoes, onions; craving savory."
        className="w-full bg-transparent border border-amber-500 p-3 rounded-lg focus:outline-none focus:border-amber-400 text-white"
      />
      <button
        onClick={askChef}
        disabled={loading}
        className="self-start bg-amber-500 hover:bg-amber-400 px-6 py-2 rounded-lg font-semibold transition-all disabled:opacity-50"
      >
        {loading ? 'Cooking...' : 'Ask ChefBot'}
      </button>

      {reply && (
        <div className="whitespace-pre-wrap bg-white/10 border border-amber-500 rounded-lg p-4">
          {reply}
        </div>
      )}
    </div>
  );
};

export default ChefBot;
