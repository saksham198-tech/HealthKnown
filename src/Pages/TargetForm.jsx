import React, { useState } from "react";
import { replace, useLocation, useNavigate } from "react-router-dom";

const TargetForm = () => {

  const location = useLocation();
  const bodyType = new URLSearchParams(location.search).get("bodyType")
  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    currentWeight: "",
    targetWeight: "",
    calory: "",
    food: "veg",
  });

  const handleChange = (e) => {
      setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(form);
      

     try{
       const prompt = `
You are a professional fitness and nutrition assistant.

Generate a *7-day personalized Diet and Exercise Plan* based on the following details:
- Body Type: ${bodyType}
- Current Weight: ${form.currentWeight} kg
- Target Weight: ${form.targetWeight} kg
- Daily Calorie Intake: ${form.calory} calories
- Diet Type: ${form.food}

 *VERY IMPORTANT: Return output ONLY in valid JSON format, strictly matching this structure below (no explanations, no markdown, no text outside JSON):*

{
  "dietPlan": [
    {
      "day": "Day 1",
      "focus": "Example: High Protein & Complex Carbs",
      "meals": {
        "breakfast": "Describe with quantity and calories",
        "midMorningSnack": "Describe with calories",
        "lunch": "Describe with calories",
        "eveningSnack": "Describe with calories",
        "dinner": "Describe with calories",
        "hydration": "Mention water or fluids"
      }
    },
    ...
    (up to Day 7)
  ],
  "exercisePlan": [
    {
      "day": "Day 1",
      "activity": "Workout focus",
      "duration": "e.g. 45-60 minutes",
      "details": [
        "Warm-up instructions",
        "Workout steps (list)",
        "Cool-down instructions"
      ]
    },
    ...
    (up to Day 7)
  ],
  "disclaimer": "Include a short professional disclaimer about customization and consulting experts."
}

Ensure:
- Consistent key names exactly as shown.
- Always include all 7 days in both dietPlan and exercisePlan.
- No extra explanations, code blocks, or markdown formatting.
- Only return raw JSON.
      `;

    
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="+import.meta.env.VITE_GEMINI_API_KEY,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          contents:[{parts:[{text:prompt}]}]
        }
      )

      });

      const data = await res.json();
      console.log(data);

      const textContent = data?.candidates?.[0]?.content?.parts?.[0]?.text ||"{}";
      console.log(textContent);
      
      const cleanText =textContent.replace(/```json|/g ,"").replace(/[\u0000-\u001F]+/g,"").trim();
      const plan = JSON.parse(cleanText);
      console.log(plan);
      
      navigate("/weekly-plan",{state:{plan,form,bodyType}})

     }
     catch(err){
        console.error("Error happened", err.message);
        
     }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex justify-center items-center px-4">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-xl p-8">
        <h1 className="text-3xl text-gray-800 font-bold mb-6 text-center">
          Set Your Fitness Target
        </h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-600 font-semibold text-md">
              Current Weight:
            </label>
            <input
              type="number"
              className="px-4 py-2 rounded-xl mt-2 border outline-none focus:ring focus-ring-blue-600 w-full"
              name="currentWeight"
              value={form.currentWeight}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-gray-600 font-semibold text-md">
              Targeted Weight:
            </label>
            <input
              type="number"
              className="px-4 py-2 rounded-xl mt-2 border outline-none focus:ring focus-ring-blue-600 w-full"
              name="targetWeight"
              value={form.targetWeight}
              onChange={handleChange}
              required
            />
          </div>

            <div>
            <label className="text-gray-600 font-semibold text-md">
              Calories per day:
            </label>
            <input
              type="number"
              className="px-4 py-2 rounded-xl mt-2 border outline-none focus:ring focus-ring-blue-600 w-full"
              name="calory"
              value={form.calory}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-gray-600 font-semibold text-md">
              Diet Type:
            </label>

            <select name="food" value={form.food}
            onChange={handleChange}
            className="px-4 py-2 rounded-xl mt-2 border outline-none focus:ring focus-ring-blue-600 w-full">
                <option value="veg">Veg</option>
                <option value="non-veg">Non-veg</option>
            </select>
          </div>

          <button type="submit"
          className="px-4 py-2 bg-yellow-500 rounded-xl shadow-2xl font-semibold mt-2 hover:bg-yellow-600 transition-all">
            
            Generate My Diet
          </button>

        </form>
      </div>
    </div>
  );
};

export default TargetForm;