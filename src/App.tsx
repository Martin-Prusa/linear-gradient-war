import { useState } from 'react';

function App() {
  const [colors, setColors] = useState(['#FFD500', '#FF0040']);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  return (
    <main className="container">
      <article
        style={{
          backgroundImage,
          height: '40vh',
        }}
      />

      <form>
        {colors.map((color, index) => {
          const colorId = `color-${index}`;

          return (
            <article key={colorId}>
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <input
                id={colorId}
                type="color"
                value={color}
                onChange={(event) => {
                  const nextColors = [...colors];
                  nextColors[index] = event.target.value;

                  setColors(nextColors);
                }}
              />
            </article>
          );
        })}
      </form>
    </main>
  );
}

export default App;
