window.onload = () => {
    // Teste
    const canvas = document.getElementById("game")
    const context = canvas.getContext("2d")

    let map = [
        { name: "sub-l", x: 0, y: 0, color: "#000000", s: "#FFFFFF" },
        { name: "down", x: 0, y: 1, color: "#000000", s: "#000000" },
        { name: "top-r", x: 0, y: 2, color: "#000000", s: "#000000" },
        { name: "black", x: 0, y: 3, color: "#000000", s: "#000000" },

        { name: "up", x: 1, y: 0, color: "#FF0000", s: "#FFFFFF" },
        { name: "black", x: 1, y: 1, color: "#000000", s: "#FFFFFF" },
        { name: "up", x: 1, y: 2, color: "#FF00FF", s: "#FFFFFF" },
        { name: "black", x: 1, y: 3, color: "#000000", s: "#FFFFFF" },

        { name: "sub-r", x: 2, y: 0, color: "#FF0000", s: "#FFFFFF" },
        { name: "down", x: 2, y: 1, color: "#00FF00", s: "#FFFFFF" },
        { name: "top-l", x: 2, y: 2, color: "#FF00FF", s: "#FFFFFF" },
        { name: "black", x: 2, y: 3, color: "#000000", s: "#FFFFFF" }
    ]

    map.forEach(item => {
        context.fillStyle = "#000000"
        let x = (item.x * 10)
        let y = (item.y * 10)
        context.fillRect(y,x, 10, 10)
        context.fillStyle = "#FFFFFF"

        if (item.name === "down") {
            context.fillRect(y, x + 4, 10, 1)
        }
        if (item.name === "sub-l") {
            context.fillRect(y + 4, x + 4, 1, 6)
            context.fillRect(y + 4, x + 4, 6, 1)
        }
        if (item.name === "sub-r") {
            context.fillRect(y + 4, x, 1, 5)
            context.fillRect(y + 4, x + 4, 6, 1)
        }
        if (item.name === "top-r") {
            context.fillRect(y, x + 4, 5, 1)
            context.fillRect(y + 4, x + 4, 1, 6)
        }
        if (item.name === "top-l") {
            context.fillRect(y, x + 4, 5, 1)
            context.fillRect(y + 4, x, 1, 5)
        }
        if (item.name === "up") {
            context.fillRect(y + 4, x, 1, 10)
        }   
    })

}