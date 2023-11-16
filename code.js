const template = document.getElementById('contact-card');
const contactCard = template.content.cloneNode(true);

contactCard.querySelector('img').src = './picture2.jpg';
contactCard.querySelector('.name').textContent = 'No Name 2008';
contactCard.querySelector('.email').textContent = 'noname_bruh@example.com';
contactCard.querySelector('.phone').textContent = '+7 985 887 83 39';
document.body.appendChild(contactCard);

const contactCard2 = template.content.cloneNode(true);
contactCard2.querySelector ('img').src = './picture1.jpg'
contactCard2.querySelector('.name').textContent = 'Monstercat_Lover';
contactCard2.querySelector('.email').textContent = 'kto-to.tam@example.com';
contactCard2.querySelector('.phone').textContent = '+7 223 323 23 33';
document.body.appendChild(contactCard2);