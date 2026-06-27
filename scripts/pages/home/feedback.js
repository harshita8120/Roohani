const feedbacks = [{
    reviewerImage: 'images/IMG_20241118_155522.jpg',
    reviewerName: 'Garima Arora',
    reviewerInfo: 'Renowned Chef, Owner of 2 times Michelin Star Restaurant "Gaa"',
    rating:'⭐⭐⭐⭐⭐',
    review: 'Nayanjyoti has proved that where there is will, there is way. He always comes up with innovative ideas often taking risks. His core idea to level up traditional Assamese cuisine with modern techniques, distinguishes him as a chef. His passion and determination has bought him here. I believe he will take Roohani miles ahead.'
}, {
    reviewerImage: 'images/IMG_20241118_155545.jpg',
    reviewerName: 'Vikas Khanna',
    reviewerInfo: 'Renowned Chef, New York-based Restaurateur',
    rating:'⭐⭐⭐⭐⭐',
    review: "Nayan's presentation is as beautiful as Assam. His passion, his experiment, his sense of plating, everything is just amazing. Despite hailing from an isolated part of the country, his dishes have a modern touch. This is what that's most surprising to me. It's a proud moment for me, seeing this young and talented chef fulfilling his dream."
}, {
    reviewerImage: 'images/chef3.jpg',
    reviewerName: 'Ranveer Brar',
    reviewerInfo: 'Celebrity Chef, Restaurateur',
    rating:'⭐⭐⭐⭐⭐',
    review: 'Even after attending culinary schools, people lack the courage of making the kind of dishes that Nayanjyoti makes. His dishes are technically correct. He knows the art of telling stories through his dishes. I feel Roohani will be as promising as Nayan is.'
}];

const feedbackHTML = feedbacks.map((feedback) => { 			
    return `<div class="slide">
        <img src=${feedback.reviewerImage} alt=${feedback.reviewerName}> 
        <div class="slide-text">
            <p class="slide-name">${feedback.reviewerName}</p>
            <p class="slide-title">${feedback.reviewerInfo}</p>
            <p>${feedback.rating}</p>
            <p class="slide-review"> ${feedback.review}</p>
        </div>
    </div>`
});



document.querySelector('.slides').innerHTML=feedbackHTML.join('');