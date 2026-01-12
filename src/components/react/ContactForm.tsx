import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Zod Schema for validation
const contactFormSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().optional(),
  inquiryType: z.enum(["trial", "membership", "other"]),
  message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // デモサイトのため、実際の送信は行わず完了画面へ遷移
    console.log("Form data:", data);
    window.location.href = "/contact/thanks";
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto"
    >
      {/* 名前 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          名前 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="input input-bordered w-full"
          aria-required="true"
        />
        {errors.name && (
          <p className="text-error text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* メールアドレス */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="text"
          {...register("email")}
          className="input input-bordered w-full"
          aria-required="true"
          inputMode="email"
        />
        {errors.email && (
          <p className="text-error text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* 電話番号 */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          電話番号 <span className="text-gray-500 text-xs">(任意)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="input input-bordered w-full"
        />
        {errors.phone && (
          <p className="text-error text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* お問い合わせ種別 */}
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
          お問い合わせ種別 <span className="text-red-500">*</span>
        </label>
        <select
          id="inquiryType"
          {...register("inquiryType")}
          className="select select-bordered w-full"
          aria-required="true"
        >
          <option value="">選択してください</option>
          <option value="trial">体験レッスンについて</option>
          <option value="membership">入会について</option>
          <option value="other">その他</option>
        </select>
        {errors.inquiryType && (
          <p className="text-error text-sm mt-1">
            {errors.inquiryType.message}
          </p>
        )}
      </div>

      {/* お問い合わせ内容 */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="textarea textarea-bordered w-full"
          aria-required="true"
        />
        {errors.message && (
          <p className="text-error text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* 送信ボタン */}
      <div className="text-center">
        <button type="submit" className="btn btn-primary px-8">
          送信
        </button>
      </div>
    </form>
  );
}
