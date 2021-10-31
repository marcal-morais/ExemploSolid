import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMailProvider, IMessage } from '../IMailProvider';

export default class HostingerMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.MAIL_USER}`,
        pass: `${process.env.MAIL_PASSWORD}`,
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: `${process.env.MAIL_NAME}`,
        address: `${process.env.MAIL_USER}`,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
