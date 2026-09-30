import tools from '../../data/workTools.json';
import './ToolsList.scss';

export const ToolsList = () => {
  return (
    <section className="tools-list">
      <h2>Tools List</h2>
      <div className="tools-grid">
        {tools.map(tool => (
          <div key={tool.id} className="tool-card">
            <div className="tool-image">
              <img
                src={`/images/tools/${tool.image}`}
                alt={tool.name}
              />
            </div>
            <div className="tool-info">
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-description">{tool.description}</p>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-button">
                Visit Tool
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};