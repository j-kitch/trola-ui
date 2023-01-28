import React, {FC} from "react";

const LoginButton: FC = () => {
    return (
        <button className="text-gray-100 text-lg border-gray-200 w-3/12
                            hover:bg-white hover:text-blue-600 transition-colors duration-500
                            bg-opacity-50 rounded-2xl">
            Login or Sign Up
        </button>
    );
};

export default LoginButton;