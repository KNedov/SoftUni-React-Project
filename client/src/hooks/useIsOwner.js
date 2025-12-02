import { useUserContext } from "../contexts/UserContext";

export default function useIsOwner(ownerId) {
    const { user } = useUserContext();

    if (!user) return false; 

    return user._id === ownerId;
}