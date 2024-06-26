import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "components/misc/Buttons";

export default () => {
    const [getName, setName] = useState('');
    const [getId, setId] = useState('');
    const [getEmail, setEmail] = useState('');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = searchParams.get('code');
        let creds = JSON.stringify({
            "code": code ? code : "n/a"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.rollintrades.com:1809/discordtoken',
            headers: {},
            data: creds
        };

        axios.request(config).then(response => {
            if (response.status !== 200) {
                navigate('/');
                return;
            }
            setName(response.data.data.username);
            setId(response.data.data.id);
            setEmail(response.data.data.email);
            console.log(response.data.data.username);
            if (response.data.data.username === '') {
                navigate('/');
            }
        }).catch(error => {
            console.log(error);
            navigate('/');
        });
    }, [searchParams, navigate]);

    return (
        <div>
            <h1>{getName}</h1>
            <h2>{getId}</h2>
            <h3>{getEmail}</h3>
            <PrimaryButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={() => navigate('/login')}>Admin Login</PrimaryButton>
        </div>
    );
}
