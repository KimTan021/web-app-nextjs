import {At, EnvelopeSimple, GoogleLogo, Key, Password} from "phosphor-react";
import Link from "next/link";
import {FormEvent, useRef} from "react";

type Props = {
    loginWithGoogle: () => void,
    loginWithEmailAndPassword: (email: string, password: string) => void
}

export function Login({loginWithGoogle, loginWithEmailAndPassword}: Props) {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (email.current && password.current) {
            loginWithEmailAndPassword(email.current.value, password.current.value);
        }
    }

    return (
        <div className="bg-gray-800 md:w-[500px] md:h-[700px] rounded-xl p-8">
            <h2 className="mt-20 mb-8 text-3xl text-center text-white font-bold">Welcome Back</h2>
            <button
                onClick={loginWithGoogle}
                className="rounded-sm flex gap-x-4 mb-8 text-white h-12 w-full items-center justify-center px-6 bg-blue-500">
                <GoogleLogo className='w-6 h-6'/>
                <span className="relative text-xl font-bold">with Google</span>
            </button>
            <p className='text-center text-xl mb-8 text-white'>Or</p>
            <form
                className="space-y-8"
                onSubmit={handleSubmit}
            >
                <div className="space-y-4">
                    <div className="relative flex items-center">
                        <EnvelopeSimple className='w-6 h-6 absolute left-4 inset-y-0 my-auto'/>
                        <input
                            ref={email}
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="focus:outline-none
                                        block w-full rounded-xl placeholder-gray-500
                                        bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition
                                        duration-300 invalid:ring-2 invalid:ring-red-400
                                        focus:ring-2 focus:ring-black"
                        />
                    </div>
                </div>
                <div className="space-y-4 my-6">
                    <div className="relative flex items-center">
                        <Key className='w-6 h-6 absolute left-4 inset-y-0 my-auto'/>
                        <input
                            ref={password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="focus:outline-none block w-full rounded-xl placeholder-gray-500 bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-black"
                        />
                    </div>
                </div>
                <button type="submit"
                        className="bg-blue-500 rounded-sm flex h-12 w-full items-center justify-center px-6">
                                <span
                                    className="text-xl font-bold text-white">
                                    Login
                                </span>
                </button>
                <p className="border-t border-gray-100 pt-6 text-center text-sm text-white">
                    Don't have an account ?<Link href="/sign-up" className="text-blue-500"> Sign up</Link>
                </p>
            </form>
        </div>
    )
}