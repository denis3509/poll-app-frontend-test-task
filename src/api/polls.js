import {getClient} from "@/api/client";

export default class PollsApi {

    async getPollList() {
        const client = getClient()
        const resp = await  client.get("polls/poll-list")
    }

    async getCurrentQuestion() {
        const client = getClient()
        const resp = await  client.get("polls/question")
    }

    async getResultList() {
        // TODO
    }

    async sendAnswers(answers) {
        // TODO
    }

    async registerForTest(pollId) {
        const client = getClient()
        const resp = await  client.get("polls/question")
    }
}

