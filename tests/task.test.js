const request = require("supertest")

const app = require("../app")
const { Task } = require("../src/models/Task")
const {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    setupData
} = require("./fixtures/db/setup")
require("./fixtures/db/connect")

beforeEach(setupData)

test("Should create a new task for user", async () => {
    const response = await request(app)
        .post("/tasks")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: "False decitions"
        })
        .expect(201)

    // expect(response.body).toMatchObject({
    //     owner: userOneId.toJSON(),
    //     completed: false,
    //     description: "False decitions"
    // })

    const task = await Task.findById(response.body._id)

    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})

test("Should get all tasks for userOne", async () => {
    const response = await request(app)
        .get("/tasks")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    expect(response.body.length).toEqual(2)
})

test("Should not delete taskOne with userTwo credentials", async () => {
    const response = await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404)

    const task = Task.findById(taskOne._id)

    expect(task).not.toBeNull()
})
