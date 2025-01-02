import Form from "next/form";
import { sendDiscordMessage } from "../actions";

const MessageForm = () => {
  return (
    <Form 
    action={sendDiscordMessage}
    className="flex flex-col items-center">
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        className="border p-1 my-2 rounded w-[300px] text-black "
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="border p-1 my-2 rounded w-[300px] text-black "
        required
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Enter your image url"
        className="border p-1 my-2 rounded w-[300px] text-black "
      />
      <select
        name="type"
        className="border p-1 my-2 rounded w-[300px] text-black "
        required
      >
        <option value="feedback">Feedback</option>
        <option value="question">Question</option>
        <option value="general">General</option>
      </select>

      <textarea
        name="message"
        placeholder="Enter your message"
        className="border p-1 my-2 rounded w-[300px] text-black "
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
    </Form>
  );
};

export default MessageForm;
