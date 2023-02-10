import { useState } from 'react';

function App() {
  const [colors, setColors] = useState(['#FFD500', '#FF0040']);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  const addColor = () => {
      setColors([...colors, '#000000'])
  }

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
                {index > 1 ?
                    <button onClick={(event) => {
                        event.preventDefault()
                        const c = [...colors]
                        c.splice(index, 1)
                        setColors(c)
                    }}>Delete</button>
                    : null
                }
            </article>
          );
        })}
      </form>
        <button onClick={addColor}>Add</button>
    </main>
  );
}

export default App;
