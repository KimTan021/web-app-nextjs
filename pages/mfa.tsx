import {useCurrentUser} from "@/hooks/useCurrentUser";
import {useRouter} from "next/router";
import {Loading} from "@/components/Loading";
import {CreateMultiFactorAuthentication} from "@/components/CreateMultiFactorAuthentication";

export default function MFAPage() {
    const currenUser = useCurrentUser();
    const router = useRouter();

    if (currenUser === 'loading') {
        return <Loading />
    }

    if (!currenUser) {
        void router.push('/login')
    }

    return <CreateMultiFactorAuthentication currentUser={currenUser} />
}