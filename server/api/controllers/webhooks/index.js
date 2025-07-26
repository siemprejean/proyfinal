module.exports = {
  async fn() {
    const webhooks = await Webhook.qm.getAll();

    return {
      items: webhooks,
    };
  },
};
