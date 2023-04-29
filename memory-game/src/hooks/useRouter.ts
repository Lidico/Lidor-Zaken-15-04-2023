import { useMemo } from "react";
import {
    useParams,
    useLocation,
    useNavigate
} from "react-router-dom";
import queryString from "query-string";

export const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const history = useNavigate();

    return useMemo(() => {
        return {
            query: {
                ...queryString.parse(location.search),
                ...params
            },
            location,
            history
        };
    }, [params, location, history]);
};