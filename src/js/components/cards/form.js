import makeElement from '../../utils/makeElement';

const editForm = function (todoItem) {
	const template = `
    <form action="#" data-key="${todoItem.id}">
    <div>
    <label for="ID">ID</label>
    <input type="text" id="ID" name="ID" value="${todoItem.id}">
    </div>

    <div>
    <label for="category">Category</label>
    <input type="text" id="category" name="category" value="${todoItem.category}">
    </div>

    <div>
    <label for="isComplete">Completed</label>
    <input type="text" id="isComplete" name="isComplete" value="${todoItem.isComplete}">
    </div>

    <div>
    <label for="title">To Do</label>
    <input type="text" id="title" name="title" value="${todoItem.title}">
    </div>

    <div>
    <label for="startDate">Start Date</label>
    <input type="text" id="startDate" name="startDate" value="${todoItem.startDate}">
    <label for="startTime">Start Time</label>
    <input type="text" id="startTime" name="startTime" value="${todoItem.startTime}">
    </div>

    <div>
    <label for="endDate">End Date</label>
    <input type="text" id="endDate" name="endDate" value="${todoItem.endDate}">
    <label for="endTime">End Time</label>
    <input type="text" id="endTime" name="endTime" value="${todoItem.endTime}">
    </div>
    </form> 
    `;
	return makeElement(template);
};

export { editForm };
