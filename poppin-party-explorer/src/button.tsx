import React from "react"


type Color = "red" | "blue" | "green"

interface Card {
    id: String,
    name: String
}

type ButtonProps = {backgroundColor: Color}

export default function Button(backgroundColor: ButtonProps) {
    return(<div></div>)
}