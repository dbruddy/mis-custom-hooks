import {useState, useEffect, useRef} from 'react';

const useFecth = ( url ) => {
    
    const isMounted = useRef(true)

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    const [state, setState] = useState({data: null, loading: true, error: null})

    useEffect(() => {

        setState({data: null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if(isMounted.current){
                        setState({
                        loading:false,
                        error:null,
                        data
                    })
                }else{
                    console.log('setState no se llamó');
                }
            })
    }, [url]);

    return state;
}
 
export default useFecth;