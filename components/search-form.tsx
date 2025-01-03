import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {  useForm, useWatch } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Button } from './ui/button'


const FormSchema = z.object({
    address: z.string(),
    arrivingon: z.date({
        required_error: "Date is required"
    }),
    // gps coords
    // gpscoords: z.object({
    //     lat: z.number(),
    //     lng: z.number()
    // }),
    arrivingtime: z.string({
        required_error: "Time is required"
    }),
    leavingtime: z.string({
        required_error: "Time is required"
    })
})

function SearchForm() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            arrivingon: new Date(),
            arrivingtime: '',
            leavingtime: ''
        }
    })

    function onSubmit(formData: z.infer<typeof FormSchema>) {
        console.log(formData)
    }

  return (
    <div className="flex flex-col lg:flex-row">
        <div className="grid gap-y-1.5 lg:w-1/2">
            <Label htmlFor='parkingat'>Address</Label>
            <Input id='parkingat' placeholder='Enter your address' />
        </div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="gap-y-2 grid grid-cols-1 lg:grid-cols-4 gap-x-32 items-end">

                <FormField
                    control={form.control}
                    name='arrivingon'
                    render={({ field }) => (
                        <FormItem className='lg:w-[250px] grid'>
                            <FormLabel>Arriving on</FormLabel>
                            <FormControl>
                                {/* <DateSelect field={field} disableDates={true} /> */}
                                <Input {...field} placeholder='date' />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='arrivingtime'
                    render={({ field }) => (
                        <FormItem className='lg:w-[250px] grid'>
                            <FormLabel>Arriving on</FormLabel>
                            <FormControl>
                                {/* <DateSelect field={field} disableDates={true} /> */}
                                <Input {...field} placeholder='start' />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='leavingtime'
                    render={({ field }) => (
                        <FormItem className='lg:w-[250px] grid'>
                            <FormLabel>Arriving on</FormLabel>
                            <FormControl>
                                {/* <DateSelect field={field} disableDates={true} /> */}
                                <Input {...field} placeholder='end' />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type='submit'>Submit</Button>
                
            </form>
        </Form>

    </div>
  )
}

export default SearchForm