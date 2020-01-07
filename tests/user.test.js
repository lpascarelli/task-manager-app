const request = require("supertest")

const app = require("../app")
const { User } = require("../src/models/User")
const { userOneId, userOne, setupData } = require("./fixtures/db/setup")
require("./fixtures/db/connect")

beforeEach(setupData)

test("should signup a new user", async () => {
    const response = await request(app)
        .post("/users")
        .send({
            name: "Andrew",
            email: "example@example.com",
            password: "MyPass777!"
        })
        .expect(201)

    const user = await User.findById(response.body.user._id)

    expect(user).not.toBeNull()
    expect(response.body).toMatchObject({
        user: {
            name: "Andrew",
            email: "example@example.com"
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe("MyPass777!")
})

test("Should login existing user", async () => {
    const response = await request(app)
        .post("/users/login")
        .send({
            email: userOne.email,
            password: userOne.password
        })
        .expect(200)
    const user = await User.findById(userOneId)

    expect(response.body.token).toBe(user.tokens[1].token)
})

test("Should not login non-existent user", async () => {
    await request(app)
        .post("/users/login")
        .send({
            email: "HolaMundo@gmail.com",
            password: "hola123"
        })
        .expect(400)
})

test("Should get profile for user", async () => {
    await request(app)
        .get("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test("Should not get profile for unauthenticated user", async () => {
    await request(app)
        .get("/users/me")
        .send()
        .expect(401)
})

test("Should delete account for user", async () => {
    await request(app)
        .delete("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)

    expect(user).toBeNull()
})

test("Should not delete account for unauthorized user", async () => {
    const response = await request(app)
        .delete("/users/me")
        .send()

    expect(response.status === 401 || response.status === 500).toBeTruthy()
})

test("Should upload avatar image", async () => {
    await request(app)
        .post("/users/me/avatar")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .attach("avatar", "tests/fixtures/images/profile-pic.jpg")
        .expect(200)

    const user = await User.findById(userOneId)

    expect(user.avatar).toEqual(expect.any(Buffer))
})

test("Should update valid user fields", async () => {
    await request(app)
        .patch("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: "Luke Skywalker"
        })
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toBe("Luke Skywalker")
})

test("Should not update invalid fields", async () => {
    await request(app)
        .patch("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: "NYC"
        })
        .expect(400)
})
