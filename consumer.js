const kafka = require("kafka-node");
const Client = kafka.KafkaClient;
const client = new Client({ kafkaHost: "kafka:9092" });
const topics = [{ topic: "Topic1" }, { topic: "Topic2" }];
const options = { autoCommit: false };
const consumer = new kafka.Consumer(client, topics, options);

consumer.on("message", msg => console.log(msg));
