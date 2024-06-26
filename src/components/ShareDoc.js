import { useState } from "react";
import emailjs from "emailjs-com";

const ShareDoc = () => {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [docName, setDocName] = useState(""); // Example document name
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleShare = () => {
    setLoading(true);
    setSuccess(false);
    setError("");

    const templateParams = {
      to_email: recipient,
      message: message,
      doc_name: docName, // Example usage of document name
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setRecipient("");
        setMessage("");
        setDocName("");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setError("Failed to send email. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 p-4">
      <h2 className="text-2xl mb-4">Share Document</h2>
      <input
        type="text"
        placeholder="Recipient email"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="mb-2 border border-gray-300 rounded-md px-4 py-2 w-full"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-2 border border-gray-300 rounded-md px-4 py-2 w-full"
      />
      <input
        type="text"
        placeholder="Document Name"
        value={docName}
        onChange={(e) => setDocName(e.target.value)}
        className="mb-2 border border-gray-300 rounded-md px-4 py-2 w-full"
      />
      <button
        onClick={handleShare}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Sharing..." : "Share"}
      </button>
      {success && (
        <p className="text-green-500 mt-4">Document shared successfully!</p>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default ShareDoc;
