import EmojiPicker, { EmojiClickData } from "emoji-picker-react"
import { confetti } from "tsparticles-confetti"
import { useCongrats } from "../../../../utils/useCongrats"

//TODO fix confeti and shoot ony the selected
const CustomEmojiPicker = () => {
  const [shoot, selectEmoji] = useCongrats([""])
  const handleClick = (data: EmojiClickData, event: any) => {
    selectEmoji(data.emoji)
    shoot("")
  }

  return (
    <EmojiPicker
      onReactionClick={handleClick}
      reactionsDefaultOpen={true}
      allowExpandReactions={false}
    />
  )
}
export default CustomEmojiPicker
