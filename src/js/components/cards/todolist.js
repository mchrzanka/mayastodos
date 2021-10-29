import makeElement from '../../utils/makeElement';

const todosUlList = function () {
	const template = `
    <div>
        <ul id="todos" class="todos">
        </ul>
    </div>

    `;

	return makeElement(template);
};

export default todosUlList;
