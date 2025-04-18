// components/ui/SignUpModal.tsx
import React from 'react';

type SignUpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-900"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        {/* Placeholder form for sign-up, you can replace this with the script you mentioned */}
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
