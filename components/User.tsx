import {logout, verifyIfUserIsEnrolled, verifyUserEmail} from "@/firebase/authentication";
import {User} from "@firebase/auth";
import Link from "next/link";
import {notify} from "@/utils/notify";

type Props = {
    currentUser: User | null;
}

export function UserComponent({currentUser}: Props) {

    async function sendEmail() {
        if (currentUser) {
            const response = await verifyUserEmail(currentUser);

            if (response) {
                notify('We have sent you an email. Please check your inbox')
            }else {
                notify('There is an error.')
            }
        }
    }

    return (
        <div className="bg-black h-screen w-screen">
            <div className='flex flex-col justify-center items-center px-12 gap-y-12 pt-40'>
                <h2 className="mt-20 text-3xl text-center font-bold text-white">You Log-In Successfully</h2>
                {
                    currentUser && currentUser.emailVerified && !verifyIfUserIsEnrolled(currentUser) &&
                    <Link className='hover:text-blue-500 underline text-center w-full text-white' href='/mfa'>
                        Click here to activate your MFA
                    </Link>
                }
                {
                    currentUser && !currentUser.emailVerified && !verifyIfUserIsEnrolled(currentUser) &&
                    <button
                        onClick={sendEmail}
                        className={'hover:text-blue-500 underline text-center text-white w-full'}>
                        Click here to verify your email address
                    </button>
                }
                <button
                    onClick={logout}
                    className="bg-blue-500 rounded-xl flex h-12 items-center justify-center px-11">
                <span className="relative text-xl font-black text-white">
                    Logout
                </span>
                </button>
            </div>
        </div>
    )
}