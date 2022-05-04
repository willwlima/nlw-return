import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_NODEMAILER,
    pass: process.env.PASS_NODEMAILER,
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feeedget.com>",
      to: "William Lima <wt.contato@icloud.com>",
      subject,
      html: body,
    });
  }
}
