
import { MdEmail } from "react-icons/md";
import { FaRegCopy, FaRocket } from "react-icons/fa6";
import { FaLocationArrow, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { toast } from 'react-toastify';
import { IoMdCall } from "react-icons/io";
import Heading from '../utility/Heading';
import { useCreateContact, useGetConfigById, useGetHeadingById } from '../hook/index.hook';
import { useForm } from "@tanstack/react-form"
import { z } from "zod"


const contactSchema = z.object({
  name: z.string().min(3, "Minimum 3 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(300, "Message must be at most 300 characters"),
});


const Contact = () => {

  const { data } = useGetHeadingById("6")
  const { data: configData } = useGetConfigById()
  const { mutate, isPending } = useCreateContact()

  const heading = data?.data ?? undefined
  const config = configData?.data ?? undefined

  const css = "group border rounded-lg mt-4 p-4 bg-primaryColor/5 md:bg-primaryColor/0 hover:bg-primaryColor/5 border-primaryColor/50 sm:border-primaryColor/20 hover:border-primaryColor/50 transform ease-in-out duration-300"


  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: contactSchema
    },

    onSubmit: ({ value }) => {
      console.log(value)
      mutate(value, {
        onSuccess: (res) => {
          toast.success(res?.message ?? "Message sent successfully!")
          form.reset()
        },
        onError: (err) => {
          toast.error(err.message)
        }
      })
    }
  })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('mdshahdat2504@gmail.com');
      toast('Email Copied!');
    } catch (err) {
      console.error('Faild Error!', err)
    }
  }



  return (
    <div id='contact' className='dark:bg-background bg-white text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>

        <Heading
          icon={<FaRocket />}
          title={heading?.name ?? "-"}
          subtitle={heading?.title ?? "-"}
          description={heading?.description ?? "-"}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-16 md:px-8'>
          <div className='dark:bg-black/15 bg-white border border-primaryColor/20 rounded-lg p-4'>
            <h1 className='text-[18px] md:text-[20px] leading-relaxed tracking-wide mt-1 text-ternaryColor font-medium dark:text-white/80'>Let's build something meaningful—product, research, or collaboration.</h1>
            <div className='mt-6 flex flex-col'>
              <div className={`mt-4 ${css}`}>
                <div className='w-full'>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-2'>
                      <span className='text-[19px] text-ternaryColor'>
                        <MdEmail className='dark:text-primaryColor' />
                      </span>
                      <p className='text-[16px] text-ternaryColor font-medium dark:text-white/60'>Email</p>
                    </div>
                    <div onClick={() => handleCopy()} className='border px-3 py-2 border-primaryColor rounded cursor-pointer'>
                      <FaRegCopy className='text-[14px] text-ternaryColor dark:text-primaryColor' />
                    </div>
                  </div>
                  <p className='mt-1 px-6 tracking-wider dark:group-hover:text-primaryColor transform easy-in-out duration-300'> {config?.email ?? "mdshahdat2504@gmail.com"}</p>
                </div>

              </div>
              <a href={config?.linkedin ?? ""} target='_blank' className={`${css}`}>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] dark:text-primaryColor text-ternaryColor'>
                    <FaLinkedin />
                  </span>
                  <p className='text-[16px] text-ternaryColor font-medium dark:text-white/60'>Linkedin (Link)</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider dark:group-hover:text-primaryColor transform easy-in-out duration-300'>mdshahdat-hossain</p>

                </div>
              </a>
              <a href={config?.github ?? ""} target='_blank' className={`${css}`}>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] text-ternaryColor dark:text-primaryColor'>
                    <FaGithubSquare />
                  </span>
                  <p className='text-[16px] dark:text-white/60 text-ternaryColor font-medium'>Github (Link)</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider dark:group-hover:text-primaryColor transform easy-in-out duration-300'>mdshahdat</p>

                </div>
              </a>
              <div className={`${css}`}>
                <div className='flex items-center gap-2'>
                  <span className='text-[19px] text-ternaryColor dark:text-primaryColor'>
                    <IoMdCall />
                  </span>
                  <p className='text-[16px] text-ternaryColor font-medium dark:text-white/60'>Phone</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='mt-1 px-6 tracking-wider dark:group-hover:text-primary transform easy-in-out duration-300'>{config?.phone ? `+88${config?.phone}` : "-"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='border border-primaryColor/20 px-4 md:px-10 py-4 dark:bg-black/15 backdrop-blur-2xl rounded-lg'>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
              }}
              className='flex flex-col gap-6'>
              <div>
                <form.Field
                  name='name'
                >
                  {(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <div>
                        <label>Full Name <span className='text-red-500'>*</span></label>
                        <input
                          id={field.name}
                          name={field.name}
                          type='text'
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder='Jhon Deo'
                          required
                          className='mt-1 border border-primaryColor/30 px-4 py-2.5 outline-primaryColor dark:bg-black/20 rounded-lg w-full'
                        />
                        {isInvalid && (
                          <p className="text-red-500">Minimum 3 charecter</p>
                        )}
                      </div>
                    )
                  }}
                </form.Field>
              </div>

              <div>
                <form.Field
                  name='email'
                >
                  {(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <div>
                        <label>Email <span className='text-red-500'>*</span></label>
                        <input
                          id={field.name}
                          name={field.name}
                          type='email'
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          required
                          placeholder='jhondeo@example.com'
                          className='mt-1 border border-primaryColor/30 px-4 py-2.5 outline-primaryColor dark:bg-black/20 rounded-lg w-full'
                        />
                        {isInvalid && (
                          <p className="text-red-500">Please entire a valid email</p>
                        )}
                      </div>
                    )
                  }}
                </form.Field>
              </div>

              <div>
                <form.Field
                  name='message'
                >
                  {(field) => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                    const currentLength = field.state.value.length;
                    return (
                      <div>
                        <label>Message <span className='text-red-500'>*</span></label>
                        <textarea
                          id={field.name}
                          name={field.name}
                          rows={3}
                          maxLength={300}
                          value={field.state.value}
                          onChange={(e) => { field.handleChange(e.target.value) }}
                          onBlur={field.handleBlur}
                          required
                          placeholder='Message...'
                          className='mt-1 border border-primaryColor/30 px-4 py-2.5 outline-primaryColor dark:bg-black/20 rounded-lg w-full'
                        />
                        <div className={`text-right ${isInvalid ? 'text-red-500' : 'text-gray-500'}`}>{currentLength}/300
                        </div>
                        {isInvalid && (
                          <p className="text-red-500">Message must be between 10 and 300 characters</p>
                        )}
                      </div>
                    )
                  }}
                </form.Field>
              </div>

              <div className='flex justify-between items-center gap-6'>
                <button
                  type='submit'
                  disabled={isPending}
                  className={`flex items-center justify-center gap-4 px-4 py-1.5 rounded-lg w-full shadow-2xl transition-all duration-300 text-white ${isPending ? "pointer-none: bg-linear-to-bl from-primaryColor to-secondaryColor opacity-50" : "bg-linear-to-bl from-primaryColor to-secondaryColor hover:opacity-90 shadow-primaryColor/50"}`}
                >
                  <FaLocationArrow />

                  {isPending ? "Sending..." : "Send Message"}
                </button>
                <div onClick={() => handleCopy()} className=' flex items-center gap-4 py-1.5 border-2 border-ternaryColor/40 text-ternaryColor w-full justify-center px-4 rounded-lg shadow-2xl hover:shadow-primaryColor cursor-pointer'>
                  <FaRegCopy />
                  <div>Copy </div>
                </div>
              </div>
            </form>
            <p className='text-center mt-6 text-[14px]'>Or email me directly at <span className='text-ternaryColor font-medium'>mdshahdat2504@gmail.com</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;