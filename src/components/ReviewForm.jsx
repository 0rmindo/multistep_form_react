import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import "./ReviewForm.css"

const ReviewForm = ({ data, updateFieldHandle }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input 
            type="radio" 
            value="unsatisfied" 
            name="review" 
            required 
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandle("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input 
            type="radio" 
            value="neutral" 
            name="review" 
            required 
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandle("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia melhorar</p>
        </label>
        <label className="radio-container">
          <input 
            type="radio" 
            value="satisfied" 
            name="review" 
            required 
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandle("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input 
            type="radio" 
            value="very_satisfied" 
            name="review" 
            required 
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandle("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className="comment">Comntário:</label>
        <textarea 
          name="comment" 
          id="commet" 
          placeholder="Conte como foi sua experiência com o produto..." 
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandle("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm