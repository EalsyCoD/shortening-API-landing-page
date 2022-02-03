import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { createShortLink, selectLoading } from '../../store/slice/linkSlice'


import { Container,  Form, Input, Button } from './styles'

    const Api = () => {
      const loading = useSelector(selectLoading)
      const dispatch = useDispatch()
        const {
            register,
            formState: {errors},
            handleSubmit,
             reset,
        } = useForm({
            mode: 'onSubmit'
        })
        
          const onSubmit = ({Url}) => {
            dispatch(createShortLink(Url))
            reset()
          }
       
      
        return (
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="url"
                placeholder="Shorten a link here..."
                {...register('Url', {
                    required: 'Please add a link',
                    pattern: {
                        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                        message: 'Please enter a valid url',
                    },
                })}
                style={{
                  outlineColor: errors.Url ? 'var(--secondary-300)' : 'currentColor',
                  outlineWidth: errors.Url ? '4px' : '1px',
                }}
                disabled={loading === 'loading'}
              />
              <Button type="submit" disabled={loading === 'loading'}>Shorten it!</Button>
              {errors.Url && (
                  <div className='className={classes.error}'>
                      {errors.Url.message}
                  </div>
              )}
            </Form>
          </Container>
        )
      }
      
      export default Api
