import React from 'react'

import { MdAlbum  } from "react-icons/md";

import { FaHome, FaHeart ,FaWaveSquare ,FaMicrophoneAlt } from "react-icons/fa";
import { icons } from 'react-icons/lib';


const listOfmenu = [
        {
            id : 1,
            icon : <FaHome/>,
            name :"Home",
            to : "/"
        },
        {
            id : 2,
            icon : <FaHeart/>,
            name :"Favorite",
            to : "/faviorite"
        },
        {
            id : 1,
            icon : <MdAlbum/>,
            name :"Album",
            to : "/album"
        },
        {
            id : 1,
            icon : <FaMicrophoneAlt/>,
            name :"Artist",
            to : "/artist"
        },
        {
            id : 1,
            icon : <FaWaveSquare/>,
            name :"Discovery",
            to : "/discover"
        }
,
    ]
    export {listOfmenu}