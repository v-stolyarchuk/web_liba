import './ToolsPage.scss';
import { ToolsList } from '../../components/ToolsList/ToolsList';

export const ToolsPage = () => {
    return (
        <div className="tools-page">
            <h1>Інструменти</h1>
            <ToolsList />
        </div>
    );
};