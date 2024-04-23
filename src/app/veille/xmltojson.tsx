"use client"

// xmlToJsonConverter.tsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import xmljs from 'xml-js';

export const XmlToJsonConverter = ({ xmlLink }: { xmlLink: string }) => {
    console.log('xmlLink:', xmlLink);
    const [jsonData, setJsonData] = useState(null);
    const [isJson, setIsJson] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(xmlLink);
                const xmlContent = response.data;
                const jsonResult = xmljs.xml2json(xmlContent, { compact: true, spaces: 2 });

                // Vérifier si la conversion en JSON est valide
                try {
                    const parsedJson = JSON.parse(jsonResult);
                    console.log('parsedJson:', parsedJson)
                    setJsonData(parsedJson);
                    setIsJson(true);
                } catch (error) {
                    setIsJson(false);
                    console.error('Error parsing JSON:', error);
                }
            } catch (error) {
                console.error('Error fetching XML data:', error);
            }
        };

        fetchData();
    }, [xmlLink]);

    return (<div>
        {isJson ? (
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        ) : (
            // eslint-disable-next-line react/no-unescaped-entities
            <p>Le contenu n'est pas en JSON valide.</p>
        )}
    </div>);
};

export default XmlToJsonConverter;
