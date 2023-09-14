import {MultiFactorResolver} from "@firebase/auth";
import {Code} from "@/components/Code";
import {useRouter} from "next/router";
import {verifyUserEnrolled} from "@/firebase/authentication";
import {notify} from "@/utils/notify";

type Props = {
    verificationId: string,
    resolver: MultiFactorResolver
}

export function CodeSignIn({verificationId, resolver}: Props) {
    const router = useRouter();

    async function getCode(code: string) {
        const response = await verifyUserEnrolled(
            {
                verificationId,
                resolver
            },
            code
        );

        if (response) {
            await router.push('/user');
        }else {
            notify('There is an error.');
        }
    }
    return (
        <Code
            getCode={getCode}
        />
    )
}