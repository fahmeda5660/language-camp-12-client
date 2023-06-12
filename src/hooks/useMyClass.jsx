
import { useQuery } from "@tanstack/react-query";

const useMyClass = () => {
    const {data: myClasses = [], isLoading: loading, refetch}=useQuery({
        queryKey: ['myClass'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/myClass');
            return res.json();
        }
    })
    return [myClasses, loading, refetch]
}

export default useMyClass;