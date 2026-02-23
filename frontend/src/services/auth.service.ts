import api from "@/lib/axios";
import { googleLogout } from "@react-oauth/google";

export const authService = {
    logout: async () => {
        await api.post("/logout");
        googleLogout();
    },
};