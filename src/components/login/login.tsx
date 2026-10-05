import { useState } from "react";
import { useForm } from "react-hook-form";

type UserInput = {
	email: string;
	password: string;
};

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);

	// function App()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<UserInput>();
	const onSubmit = (data: UserInput): void => {
		fetch("https://6a21606fb1d0aaf32b4f4efd.mockapi.io/students", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		reset();
	};

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<form
				// noValidate
				onSubmit={handleSubmit(onSubmit)}
				className="bg-black/70 backdrop-blur-2xl rounded-xl flex flex-col gap-10 p-6 items-center justify-center md:justify-center w-full h-full md:w-1/2 md:h-1/2"
			>
				<h1 className="text-white font-bold text-2xl">Login Form</h1>
				<div className="flex flex-col gap-2 w-full">
					<label htmlFor="email" className="text-white font-bold text-xl">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="rounded-lg bg-white p-2 text-lg font-bold"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						})}
					/>
					<span className="font-bold text-red-800 text-sm">
						{errors.email?.message}
					</span>
				</div>
				<div className="flex flex-col gap-2 w-full relative">
					<label htmlFor="password" className="text-white font-bold text-xl">
						Password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						id="password"
						className="bg-white rounded-lg p-2 font-bold text-lg"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
						})}
					/>
					<span
						onClick={() => setShowPassword((currentValue) => !currentValue)}
						className="absolute top-11 size-7 right-2 cursor-pointer"
					>
						{showPassword ? (
							<svg
								width="30px"
								height="30px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z"
										fill="#000000"
									></path>
								</g>
							</svg>
						) : (
							<svg
								width="30px"
								height="30px"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<path
										fill="#000000"
										fill-rule="evenodd"
										d="M3.415 10.242c-.067-.086-.13-.167-.186-.242a16.806 16.806 0 011.803-2.025C6.429 6.648 8.187 5.5 10 5.5c1.813 0 3.57 1.148 4.968 2.475A16.816 16.816 0 0116.771 10a16.9 16.9 0 01-1.803 2.025C13.57 13.352 11.813 14.5 10 14.5c-1.813 0-3.57-1.148-4.968-2.475a16.799 16.799 0 01-1.617-1.783zm15.423-.788L18 10l.838.546-.002.003-.003.004-.01.016-.037.054a17.123 17.123 0 01-.628.854 18.805 18.805 0 01-1.812 1.998C14.848 14.898 12.606 16.5 10 16.5s-4.848-1.602-6.346-3.025a18.806 18.806 0 01-2.44-2.852 6.01 6.01 0 01-.037-.054l-.01-.016-.003-.004-.001-.002c0-.001-.001-.001.837-.547l-.838-.546.002-.003.003-.004.01-.016a6.84 6.84 0 01.17-.245 18.804 18.804 0 012.308-2.66C5.151 5.1 7.394 3.499 10 3.499s4.848 1.602 6.346 3.025a18.803 18.803 0 012.44 2.852l.037.054.01.016.003.004.001.002zM18 10l.838-.546.355.546-.355.546L18 10zM1.162 9.454L2 10l-.838.546L.807 10l.355-.546zM9 10a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z"
									></path>
								</g>
							</svg>
						)}
					</span>
					<span className="font-bold text-red-800 text-sm">
						{errors.password?.message}
					</span>
				</div>
				<button className="rounded-lg w-1/3 px-5 py-2 bg-amber-50 text-green-900 text-xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300">
					Login
				</button>
			</form>
		</div>
	);
}
