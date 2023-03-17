import React from 'react'

import { MdAlbum  } from "react-icons/md";

import { FaHome, FaPlayCircle,FaHeart ,FaWaveSquare ,FaMicrophoneAlt } from "react-icons/fa";
import { icons } from 'react-icons/lib';


const listOfmenu = [
        {
            id : 1,
            icon : <FaHome/>,
            name :"Home"
        },
        {
            id : 2,
            icon : <FaHeart/>,
            name :"Favorite"
        },
        {
            id : 1,
            icon : <MdAlbum/>,
            name :"Album"
        },
        {
            id : 1,
            icon : <FaMicrophoneAlt/>,
            name :"Artist"
        },
        {
            id : 1,
            icon : <FaWaveSquare/>,
            name :"Discovery"
        }
,
    ]
    export {listOfmenu}