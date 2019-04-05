var kafka = require("kafka-node"),
  Producer = kafka.Producer,
  KeyedMessage = kafka.KeyedMessage,
  client = new kafka.KafkaClient({ kafkaHost: "localhost:32769" }),
  producer = new Producer(client),
  km = new KeyedMessage("key", "message"),
  payloads = [
    { topic: "topic1", messages: "test", partition: 0 },
    { topic: "topic2", messages: ["hello", "world", km] },
  ];
producer.on("ready", function() {
  console.log("Producer is Ready!");
  producer.send(payloads, (err, data) => {
    if (err) {
      console.log("ready error:", err);
    }
    console.log(data);
  });
});

producer.on("error", err => console.log("on error:", err));
