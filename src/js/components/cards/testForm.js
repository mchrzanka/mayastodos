import makeElement from '../../utils/makeElement';

const testEditForm = function () {
	const template = `
    <form action="#" data-key="">
    <div>
    <label for="ID">ID</label>
    <input type="text" id="ID" name="ID" value="">
    </div>

    <div>
    <label for="category">Category</label>
    <input type="text" id="category" name="category" value="">
    </div>

    <div>
    <label for="isComplete">Completed</label>
    <input type="text" id="isComplete" name="isComplete" value="">
    </div>

    <div>
    <label for="title">To Do</label>
    <input type="text" id="title" name="title" value="">
    </div>

    <div>
    <label for="startDate">Start Date</label>
    <input type="text" id="startDate" name="startDate" value="">
    <label for="startTime">Start Time</label>
    <input type="text" id="startTime" name="startTime" value="">
    </div>

    <div>
    <label for="endDate">End Date</label>
    <input type="text" id="endDate" name="endDate" value="">
    <label for="endTime">End Time</label>
    <input type="text" id="endTime" name="endTime" value="">
    </div>
    </form> 
    `;
	return makeElement(template);
};

export { testEditForm };
