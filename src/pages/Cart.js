import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, title: 'Farcry', quantity: 1, description: 'Farcry is a critically acclaimed open-world first-person shooter developed by Ubisoft. Set in a stunning tropical island environment, players step into the shoes of a mercenary stranded in a dangerous paradise. The game features a wide range of activities including hunting, crafting, and engaging in fierce combat against hostile factions and wild animals. With its immersive world, dynamic weather system, and engaging story, Farcry offers a thrilling and adventurous experience.', imageUrl: '/images/farcry.jpeg', price: '$59.99', rating: 4.5 },
    { id: 2, title: 'Fallout', quantity: 2, description: 'Fallout is a legendary role-playing game series set in a post-apocalyptic world where nuclear war has ravaged civilization. Players explore a vast open world filled with mutants, raiders, and other survivors. The game emphasizes player choice, allowing you to shape your character and make decisions that impact the game’s world and narrative. With its deep story, rich lore, and extensive character customization, Fallout offers a unique and engaging experience in a devastated, yet vibrant world.', imageUrl: '/images/fallout.jpeg', price: '$49.99', rating: 4.2 },
    { id: 3, title: 'God of War', quantity: 1, description: 'God of War is an action-adventure game that redefines the genre with its gripping narrative and intense combat. Following the story of Kratos, the former Greek god of war, and his son Atreus, players embark on a journey through the Norse realms. The game combines mythological elements with a deeply emotional story, offering a mix of brutal combat, intricate puzzles, and exploration. The dynamic combat system, stunning visuals, and powerful storytelling make God of War a standout title in the action genre.', imageUrl: '/images/gow.jpeg', price: '$59.99', rating: 4.8 },
    { id: 4, title: 'Horizon', quantity: 1, description: 'Horizon Zero Dawn takes place in a future Earth where robotic creatures dominate the landscape. As Aloy, a young hunter with a mysterious past, players explore a lush, open-world environment while uncovering the secrets of a fallen civilization. The game features a blend of tactical combat, exploration, and a rich narrative driven by a compelling story and well-developed characters. With its beautiful visuals, innovative gameplay mechanics, and engaging storyline, Horizon Zero Dawn delivers a memorable and immersive experience.', imageUrl: '/images/horizon.jpeg', price: '$49.99', rating: 4.7 },
    { id: 5, title: 'Sekiro', quantity: 1, description: 'Sekiro: Shadows Die Twice is an action-adventure game that combines intense swordplay with a deep and intricate story. Set in a reimagined late 1500s Sengoku period Japan, players assume the role of Sekiro, a shinobi warrior on a quest for revenge. The game emphasizes precise combat, stealth, and exploration, with a focus on strategic battles and intricate level design. Its unique posture-based combat system and rich historical setting provide a challenging and rewarding experience for players seeking a high level of engagement and skill.', imageUrl: '/images/sekiro.jpeg', price: '$59.99', rating: 4.6 },
    { id: 6, title: 'Watch Dogs', quantity: 1, description: 'Watch Dogs is an open-world action-adventure game set in a near-future version of Chicago. Players control Aiden Pearce, a skilled hacker seeking vengeance after a personal tragedy. The game focuses on hacking technology and manipulating the city’s infrastructure to achieve objectives. With its emphasis on stealth, hacking mechanics, and a sprawling urban environment, Watch Dogs offers a unique blend of technological intrigue and high-stakes action. The game’s narrative, combined with its innovative gameplay, provides an engaging and immersive experience.', imageUrl: '/images/watchdogs.jpeg', price: '$39.99', rating: 4.1 },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Your Cart</h1>
      <ul className="bg-gray-800 rounded-lg shadow-lg p-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-4">
            <span className="text-white">{item.title}</span>
            <span className="text-gray-400">Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
