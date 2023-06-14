
import { useQuery } from "@tanstack/react-query";

const useMyClass = () => {
    const {data: myClasses = [], isLoading: loading, refetch}=useQuery({
        queryKey: ['myClass'],
        queryFn: async()=>{
            const res = await fetch('https://language-camps-server.vercel.app/myClass');
            return res.json();
        }
    })
    return [myClasses, loading, refetch]
}

export default useMyClass;