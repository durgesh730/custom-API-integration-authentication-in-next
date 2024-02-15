import axios from "axios";
import { useEffect, useState } from "react";

export const useLogin = () => {
    const [inVal, setInpval] = useState({
        username: '',
        password: "",
    })
    const [loading, setLoading] = useState(true)

    const handleform = (e) => {
        e.preventDefault()
        if (!inVal.username.trim()) {
            alert("Title Required")
            return;
        } else if (!inVal.password.trim()) {
            alert("Description Required")
            return;
        }
        else {
            axios.post(`https://learnkoodsapi.onrender.com/login_api/`, inVal,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access')}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then((res) => {
                    if (res.status == 200) {
                        window.location.reload()
                    }
                }).finally(() => {
                    setLoading(false)
                })
        }

    }
    return { handleform, inVal, setInpval, loading }
}

export const useRegister = () => {
    const [inVal, setInpval] = useState({
        username: '',
        password: "",
    })
    const [loading, setLoading] = useState(true)

    const handleform = (e) => {
        e.preventDefault()
        if (!inVal.username.trim()) {
            alert("Title Required")
            return;
        } else if (!inVal.password.trim()) {
            alert("Description Required")
            return;
        }
        else {
            axios.post(`https://learnkoodsapi.onrender.com/user_api/`, inVal)
                .then((res) => {
                    if (res.status == 201) {
                        localStorage.setItem("refresh", res.data.refresh)
                        localStorage.setItem("access", res.data.access)
                        window.location.reload()
                    }
                }).finally(() => {
                    setLoading(false)
                })
        }

    }
    return { handleform, inVal, setInpval, loading }
}

export const useFetachToken = () => {
    const [job, setJob] = useState([])
    const [loading, setLoading] = useState(true)
    const [refetch, setRefetch] = useState(1);

    const refresh = () => {
        setRefetch((prev) => prev + 1);
    }

    const GetAllJobs = () => {
        axios.post(`https://learnkoodsapi.onrender.com/api/token/`, {
             username:"durgeshchaudhary0@gmail.com",
             password:"123456"
        })
            .then((res) => {
                console.log(res, "api token")
                // setJob(res.data.notes)
            })
            .catch((err) => {
                // console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        GetAllJobs()
    }, [refetch])

    return { job, loading, refresh }
}

export const useFetachAllTasks = () => {
    const [job, setJob] = useState([])
    const [loading, setLoading] = useState(true)
    const [refetch, setRefetch] = useState(1);

    const refresh = () => {
        setRefetch((prev) => prev + 1);
    }

    const GetAllJobs = () => {
        axios.get(`https://learnkoodsapi.onrender.com/jobs_api/`, 
        {
            headers: {
                // 'Authorization': `Bearer ${localStorage.getItem('access')}`,
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwODUzNDEzNywiaWF0IjoxNzA3OTI5MzM3LCJqdGkiOiI0ODM0NTZmNzI2Nzc0MjczOGVmMWMxYjE2YTRkNzMyZiIsInVzZXJfaWQiOjQ1fQ.b1-shsArjwceS81_7n41eZJqWjGRV9ZaDUymbCIyeJA`,
            }
        }
        )
            .then((res) => {
                // console.log(res)
                setJob(res.data.notes)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        GetAllJobs()
    }, [refetch])

    return { job, loading, refresh }
}