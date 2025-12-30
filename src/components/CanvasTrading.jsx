import React, { useRef, useEffect } from "react";

function TradingCanvas() {
const canvasRef = useRef(null); // بنخزن المرجع للكانفاس

useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // تحديد أبعاد الكانفاس
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // رسم مثال بسيط: مستطيلات متحركة
    let rectangles = [];
    for (let i = 0; i < 50; i++) {
    rectangles.push({
        x: i * 30,
        y: Math.random() * canvas.height,
        h: Math.random() * 100 + 20,
        up: Math.random() > 0.5,
    });
    }

    function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // مسح الكانفاس كل فريم

    rectangles.forEach((r) => {
        ctx.fillStyle = r.up ? "#00ff00" : "#ff3333"; // أخضر للارتفاع، أحمر للنزول
        ctx.fillRect(r.x, r.y, 10, r.h);

        // تحديث موضع المستطيل
        r.y += r.up ? -0.5 : 0.5;

        // لو خرج المستطيل من الشاشة نرجعه
        if (r.y < 0 || r.y > canvas.height) {
        r.y = Math.random() * canvas.height;
        }
    });

    requestAnimationFrame(animate); // إعادة رسم كل فريم
    }

    animate();
}, []);

return (
    <canvas
    ref={canvasRef}
    style={{
        position: "fixed", // يبقى في الخلفية
        top: 0,
        left: 0,
        filter: "blur(3px) brightness(0.7)", // ضبابية + تخفيف الإضاءة
        zIndex: -1, // تحت كل العناصر
        background: "#000", // خلفية سوداء
    }}
    />
);
}

export default TradingCanvas;
