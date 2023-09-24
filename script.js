function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    // เลือกองค์ประกอบทั้งหมดที่ตรงกับตัวเลือกที่กำหนด
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    // " ตรวจสอบว่ามีองค์ประกอบที่ตรงกับตัวเลือกที่ระบุและว่าองค์ประกอบที่ร้องขอมีอยู่หรือไม่"
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        // "เลื่อนเลือกไปยังองค์ประกอบที่ระบุในที่แทน"
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});