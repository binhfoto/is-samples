import axios from "axios";
import {CONFIG} from "../config";

export async function fetchUserProfile(accessToken) {
    if (!accessToken) {
        return;
    }

    try {
        const {data: profile} = await axios.get(`/api/profile/user`, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        });
        return profile;
    } catch (error) {
        console.log(error);
    }
}