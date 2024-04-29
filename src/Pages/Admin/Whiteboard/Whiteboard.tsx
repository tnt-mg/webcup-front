import { Excalidraw, getSceneVersion } from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types"
import { useCallback, useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useSocket } from "socket.io-react-hook"
import { v4 as uuid, validate } from "uuid"
import { debounce } from "../../Components/Whiteboard/utils/whiteboard"
import { WhiteboardMenu } from "../../Components/Whiteboard/WhiteboardMenu"
import { WhiteboardWelcomeScreen } from "../../Components/Whiteboard/WhiteboadWelcomeScreen"
import { useTranslation } from "react-i18next"
import "./whiteboard.scss"
import lightSong from "/sounds/light.mp3"
import useSound from "use-sound"
import { confetti } from "tsparticles-confetti"

const socketHOST =
  import.meta.env.VITE_ENV === "AWS"
    ? import.meta.env.VITE_AWS_BASE_URL
    : import.meta.env.VITE_LOCAL_BASE_URL

const dreams: any = {
  good: {
    Icon: () => {
      return (
        <>
          <svg className="w-6" viewBox="0 0 512 512">
            <g>
              <path
                d="M194.811,161.364c-3.467,1.892-6.589,6.254-2.459,16.33c5.283,12.92,4.563,27.491,15.782,27.491
		c5.542,28.606,7.934,27.703,14.494,34.994c0,8.732,0,6.196,0,11.287c0,14.591-4.956,14.841-16.242,21.161
		c-27.213,15.197-46.406,18.453-51.833,59.114c-0.989,7.444,41.699,15.542,101.446,15.581
		c59.757-0.038,102.436-8.137,101.456-15.581c-5.428-40.661-24.937-42.726-51.834-59.114c-11.949-7.309-16.242-6.57-16.242-21.161
		c0-5.091,0-2.556,0-11.287c6.561-7.291,8.942-6.388,14.495-34.994c11.219,0,10.489-14.571,15.782-27.491
		c4.314-10.548,0.702-14.813-2.93-16.56c2.978-38.356,2.978-64.8-40.593-72.994c-15.782-13.535-39.595-8.943-50.882-6.686
		c-11.286,2.276-21.449,0-21.449,0l1.921,18.184C189.211,119.464,197.482,145.899,194.811,161.364z"
              />
              <path
                d="M492.224,300.58c-4.706,1.479-10.46,3.506-16.54,4.506c-2.594,0.432-5.235,0.672-7.877,0.653
		c0.086-0.288,0.173-0.576,0.26-0.865c1.709-5.812,3.179-11.864,4.226-16.82c1.056-4.947,1.72-8.78,1.988-10.163
		c0.808-4.044,1.354-6.964,2.277-9.02c0.931-2.066,2.248-3.276,4.466-3.948c8.914-2.171,17.079-7.992,22.794-16.762
		c5.726-8.712,8.934-20.326,8.032-32.774c-0.586-7.819-2.287-11.219-4.563-11.872c-2.296-0.653-5.235,1.412-8.866,4.352
		c-3.64,2.949-8.002,6.743-13.006,9.768c-2.142,1.306-4.41,2.469-6.772,3.392c-0.51-5.38-1.24-10.807-1.97-15.245
		c-0.768-4.735-1.489-8.347-1.719-9.663c-1.364-7.704-1.941-11.076,1.585-13.765c7.175-4.937,12.468-12.834,14.611-22.506
		c2.171-9.635,1.133-20.998-3.775-31.708c-3.104-6.724-5.735-9.154-7.974-8.972c-2.257,0.173-4.197,2.978-6.464,6.781
		c-2.267,3.823-4.89,8.636-8.338,12.987c-1.478,1.874-3.112,3.65-4.898,5.254c-1.969-4.044-4.025-7.972-5.841-11.248
		c-2.2-3.977-4.015-6.974-4.63-8.079c-3.679-6.446-5.254-9.279-2.949-12.795c4.871-6.686,7.127-15.398,6.071-24.687
		c-1.028-9.269-5.408-19.066-13.025-27.126c-4.803-5.052-7.886-6.426-9.836-5.59c-1.979,0.855-2.891,3.947-3.785,8.059
		c-0.893,4.112-1.806,9.232-3.573,14.188c-0.749,2.104-1.662,4.159-2.757,6.119c-2.181-2.191-4.313-4.265-6.224-6.052
		c-3.324-3.112-5.956-5.418-6.888-6.272c-5.476-5.005-7.848-7.214-6.734-11.268c2.594-7.857,2.075-16.849-1.777-25.359
		c-3.812-8.51-10.998-16.502-20.729-21.834c-6.128-3.344-9.49-3.718-11.094-2.306c-1.623,1.411-1.538,4.64-1.124,8.828
		c0.394,3.995,1.057,8.875,0.971,13.89c-3.305-3.862-7.82-6.849-12.892-9.193c-5.936-2.767-14.821-4.582-22.496-3.987
		c-7.694,0.558-14.024,3.439-15.504,8.76c-1.498,5.351,2.094,10.941,6.964,15.869c4.918,4.899,11.162,9.251,16.187,11.585
		c4.485,2.064,8.942,3.611,13.64,3.909c-0.212,0.163-0.423,0.326-0.634,0.49c-4.092,3.103-8.222,5.696-11.383,8.078
		c-3.16,2.363-5.36,4.495-5.716,6.532c-0.355,2.046,1.134,3.947,5.341,6.253c6.676,3.66,14.015,5.11,21.632,4.765
		c7.589-0.375,15.446-2.526,22.458-6.744c3.593-1.949,6.158-0.249,11.182,4.39c0.855,0.788,3.151,3.065,5.994,6.148
		c1.624,1.758,3.41,3.785,5.236,5.928c-1.931,0.912-3.91,1.7-5.879,2.391c-4.841,1.691-9.568,2.892-13.304,4.178
		c-3.746,1.288-6.484,2.622-7.455,4.458c-0.96,1.844-0.125,4.12,3.18,7.598c5.245,5.553,11.786,9.183,19.135,11.191
		c7.339,1.979,15.484,2.325,23.448,0.461c4.025-0.758,5.936,1.643,9.288,7.599c0.576,1.018,2.066,3.89,3.823,7.684
		c1.451,3.141,3.074,6.936,4.582,10.797c-2.421,0.317-4.85,0.432-7.233,0.46c-5.389,0.068-10.499-0.317-14.659-0.278
		c-4.149,0.038-7.339,0.471-8.914,1.96c-1.586,1.509-1.538,4.025,0.547,8.55c3.295,7.184,8.521,12.929,15.1,17.396
		c6.59,4.428,14.543,7.588,23.093,8.52c4.255,0.663,5.312,3.708,6.531,10.778c0.202,1.201,0.663,4.563,1.048,8.943
		c0.365,4.112,0.643,9.106,0.71,14.034c-2.449-0.586-4.832-1.345-7.128-2.171c-5.34-1.921-10.249-4.169-14.36-5.63
		c-4.102-1.479-7.407-2.209-9.51-1.316c-2.114,0.893-2.997,3.362-2.614,8.54c0.596,8.213,3.602,15.792,8.435,22.593
		c4.832,6.772,11.479,12.824,19.538,16.944c1.979,1.124,2.929,2.517,3.209,4.573c0.288,2.056-0.087,4.745-0.846,8.444
		c-0.25,1.258-1.066,4.725-2.363,9.154c-1.278,4.428-3.045,9.808-5.014,14.928c-0.105,0.26-0.202,0.51-0.298,0.759
		c-2.142-1.518-4.139-3.18-6.051-4.861c-4.457-3.967-8.376-8.059-11.824-11.076c-3.448-3.026-6.388-5.014-8.79-4.975
		c-2.431,0.038-4.236,2.084-5.86,7.194c-2.612,8.107-2.622,16.504-0.633,24.994c2.007,8.454,6.022,16.993,12.179,24.264
		c2.91,3.775,1.441,7.022-3.006,13.563c-0.759,1.114-2.978,4.131-6.042,7.887c-3.054,3.746-6.993,8.213-11.018,12.343
		c-0.644,0.672-1.296,1.326-1.941,1.97c-1.393-2.344-2.622-4.765-3.737-7.166c-2.622-5.706-4.668-11.287-6.733-15.648
		c-2.046-4.37-4.064-7.511-6.388-8.5c-2.344-0.98-4.938,0.192-8.626,4.39c-5.898,6.628-9.423,14.64-11.104,23.62
		c-1.643,8.933-1.441,18.856,1.316,28.482c1.172,4.879-1.643,7.348-8.742,11.671c-1.21,0.73-4.64,2.651-9.202,4.888
		c-4.563,2.249-10.269,4.765-15.917,6.907c-5.648,2.171-13.352,5.485-17.454,6.926c-53.436,18.78-117.757,26.886-157.582,56.156
		c-6.206,4.562,6.128,22.122,11.574,20.757c5.447-1.354,44.591-24.84,142.579-51.64c4.11-1.45,24.004-7.934,30.085-10.844
		c6.1-2.901,12.199-6.206,17.059-9.04c4.861-2.843,8.502-5.196,9.846-6.003c3.91-2.401,6.706-4.16,9.097-4.956
		c2.382-0.806,4.361-0.663,6.589,0.634c4.265,2.786,9.116,4.726,14.361,5.696c5.245,0.961,10.893,0.942,16.647-0.134
		c5.744-1.086,11.612-3.228,17.204-6.456c5.6-3.218,10.941-7.512,15.599-12.766c5.86-6.638,7.252-10.691,6.004-12.997
		c-1.258-2.334-5.196-3.026-10.364-3.593c-5.178-0.547-11.594-1.018-17.876-2.622c-2.651-0.672-5.273-1.546-7.78-2.669
		c0.663-0.778,1.316-1.566,1.969-2.364c4.072-4.928,8.011-10.181,11.076-14.543c3.064-4.37,5.283-7.829,6.118-9.058
		c4.851-7.224,6.964-10.384,11.864-9.855c9.538,1.518,19.855-0.856,28.99-7.147c4.553-3.14,8.8-7.242,12.402-12.16
		c3.612-4.909,6.58-10.653,8.616-16.964c2.536-7.954,2.19-11.988,0.23-13.516C500.62,298.227,496.932,299.101,492.224,300.58z"
              />
              <path
                d="M196.722,450.987c12.325-4.765,25.34-8.808,38.529-12.565c-14.168-3.862-28.202-7.886-41.554-12.574
		c-4.102-1.441-11.805-4.755-17.453-6.926c-5.648-2.142-11.354-4.658-15.916-6.907c-4.563-2.238-7.992-4.159-9.203-4.888
		c-7.099-4.323-9.913-6.792-8.741-11.671c2.757-9.626,2.958-19.549,1.316-28.482c-1.681-8.98-5.206-16.992-11.104-23.62
		c-3.688-4.198-6.282-5.37-8.625-4.39c-2.326,0.989-4.342,4.13-6.389,8.5c-2.065,4.361-4.12,9.942-6.733,15.648
		c-1.114,2.401-2.344,4.822-3.737,7.166c-0.644-0.644-1.296-1.298-1.941-1.97c-4.025-4.13-7.962-8.597-11.018-12.343
		c-3.064-3.756-5.283-6.772-6.042-7.887c-4.448-6.541-5.927-9.788-3.007-13.563c6.158-7.271,10.173-15.811,12.18-24.264
		c1.988-8.49,1.978-16.887-0.635-24.994c-1.623-5.11-3.429-7.156-5.859-7.194c-2.401-0.038-5.341,1.95-8.789,4.975
		c-3.448,3.017-7.368,7.108-11.825,11.076c-1.911,1.681-3.909,3.343-6.051,4.861c-0.096-0.25-0.193-0.5-0.288-0.759
		c-1.979-5.12-3.746-10.499-5.024-14.928c-1.296-4.428-2.113-7.896-2.362-9.154c-0.758-3.698-1.133-6.388-0.845-8.444
		c0.278-2.056,1.23-3.448,3.208-4.573c8.06-4.12,14.707-10.172,19.548-16.944c4.822-6.801,7.838-14.38,8.424-22.593
		c0.394-5.178-0.5-7.647-2.612-8.54c-2.104-0.893-5.408-0.163-9.51,1.316c-4.112,1.461-9.02,3.708-14.351,5.63
		c-2.306,0.826-4.688,1.584-7.137,2.171c0.077-4.928,0.346-9.923,0.711-14.034c0.384-4.38,0.845-7.742,1.046-8.943
		c1.22-7.069,2.277-10.115,6.532-10.778c8.549-0.932,16.502-4.092,23.092-8.52c6.58-4.467,11.806-10.211,15.101-17.396
		c2.084-4.525,2.132-7.041,0.547-8.55c-1.575-1.488-4.764-1.921-8.914-1.96c-4.16-0.038-9.27,0.346-14.658,0.278
		c-2.382-0.028-4.813-0.144-7.234-0.46c1.508-3.862,3.132-7.656,4.582-10.797c1.758-3.794,3.247-6.666,3.824-7.684
		c3.352-5.956,5.264-8.357,9.288-7.599c7.963,1.864,16.109,1.518,23.448-0.461c7.349-2.008,13.89-5.638,19.135-11.191
		c3.305-3.477,4.14-5.753,3.18-7.598c-0.971-1.835-3.708-3.17-7.454-4.458c-3.737-1.287-8.463-2.488-13.305-4.178
		c-1.969-0.692-3.947-1.48-5.878-2.391c1.824-2.142,3.612-4.17,5.245-5.928c2.834-3.082,5.13-5.36,5.984-6.148
		c5.023-4.639,7.588-6.339,11.181-4.39c7.012,4.218,14.87,6.369,22.458,6.744c7.617,0.345,14.956-1.105,21.632-4.765
		c4.208-2.306,5.696-4.207,5.341-6.253c-0.355-2.037-2.556-4.17-5.716-6.532c-3.16-2.382-7.29-4.975-11.382-8.078
		c-0.212-0.164-0.423-0.327-0.634-0.49c4.697-0.298,9.154-1.844,13.64-3.909c5.024-2.334,11.268-6.686,16.186-11.585
		c4.87-4.928,8.462-10.518,6.974-15.869c-1.489-5.322-7.82-8.203-15.514-8.76c-7.675-0.595-16.56,1.22-22.497,3.987
		c-5.072,2.344-9.586,5.331-12.89,9.193c-0.086-5.014,0.576-9.894,0.97-13.89c0.413-4.188,0.5-7.417-1.124-8.828
		c-1.604-1.413-4.966-1.038-11.094,2.306c-9.731,5.331-16.915,13.323-20.729,21.834c-3.852,8.51-4.371,17.502-1.778,25.359
		c1.114,4.054-1.258,6.263-6.734,11.268c-0.931,0.854-3.564,3.16-6.886,6.272c-1.912,1.787-4.044,3.862-6.225,6.052
		c-1.095-1.96-2.008-4.015-2.756-6.119c-1.768-4.956-2.68-10.076-3.574-14.188c-0.893-4.112-1.806-7.204-3.785-8.059
		c-1.95-0.836-5.033,0.538-9.836,5.59c-7.617,8.06-11.998,17.858-13.025,27.126c-1.056,9.29,1.201,18.002,6.071,24.687
		c2.306,3.516,0.73,6.349-2.949,12.795c-0.615,1.105-2.431,4.102-4.63,8.079c-1.816,3.276-3.872,7.204-5.841,11.248
		c-1.786-1.604-3.419-3.381-4.898-5.254c-3.449-4.351-6.071-9.164-8.338-12.987c-2.266-3.804-4.207-6.608-6.464-6.781
		c-2.238-0.183-4.87,2.248-7.963,8.972c-4.918,10.711-5.955,22.074-3.784,31.708c2.141,9.673,7.434,17.57,14.61,22.506
		c3.525,2.689,2.949,6.061,1.576,13.765c-0.222,1.316-0.942,4.928-1.72,9.663c-0.721,4.438-1.451,9.866-1.96,15.245
		c-2.363-0.923-4.63-2.085-6.781-3.392c-4.995-3.026-9.356-6.82-12.996-9.768c-3.631-2.94-6.571-5.005-8.866-4.352
		c-2.276,0.653-3.977,4.054-4.562,11.872c-0.903,12.449,2.305,24.062,8.03,32.774c5.715,8.77,13.88,14.591,22.795,16.762
		c2.218,0.673,3.534,1.883,4.467,3.948c0.922,2.056,1.469,4.976,2.276,9.02c0.269,1.383,0.931,5.216,1.989,10.163
		c1.047,4.956,2.516,11.008,4.226,16.82c0.087,0.288,0.173,0.576,0.26,0.865c-2.641,0.018-5.283-0.222-7.877-0.653
		c-6.08-1-11.834-3.027-16.541-4.506c-4.706-1.478-8.395-2.353-10.384-0.816c-1.96,1.528-2.306,5.562,0.231,13.516
		c2.036,6.311,5.005,12.054,8.616,16.964c3.602,4.918,7.848,9.02,12.402,12.16c9.135,6.292,19.451,8.665,28.989,7.147
		c4.9-0.529,7.012,2.631,11.864,9.855c0.836,1.23,3.054,4.688,6.119,9.058c3.064,4.362,7.002,9.615,11.075,14.543
		c0.654,0.798,1.307,1.586,1.969,2.364c-2.506,1.123-5.129,1.998-7.78,2.669c-6.282,1.604-12.699,2.076-17.876,2.622
		c-5.167,0.568-9.106,1.259-10.365,3.593c-1.248,2.306,0.145,6.359,6.004,12.997c4.659,5.254,10,9.548,15.6,12.766
		c5.591,3.227,11.46,5.37,17.204,6.456c5.754,1.075,11.402,1.095,16.647,0.134c5.245-0.97,10.096-2.91,14.361-5.696
		c2.229-1.296,4.207-1.44,6.589-0.634c2.392,0.797,5.188,2.556,9.097,4.956c1.344,0.807,4.986,3.16,9.846,6.003
		c4.86,2.834,10.96,6.139,17.06,9.04C172.939,443.1,191.862,449.297,196.722,450.987z"
              />
              <path
                d="M314.729,462.456c-15.379,4.246-29.259,8.414-41.756,12.411c43.447,15.647,63.004,26.963,66.731,27.894
		c5.446,1.364,17.78-16.195,11.566-20.757C340.626,474.175,328.216,467.874,314.729,462.456z"
              />
            </g>
          </svg>
        </>
      )
    },
    texts: [
      "Vous êtes chanceux, vous allez avoir un bon d'achat de 1000€ lors d'une prochaine tirage au sort si vous participiez",
      "Ne changez pas, vous êtes bien comme vous êtes",
      "Vous serez bientôt riche",
    ],
    theme: "synthwave",
  },
  bad: {
    Icon: () => {
      return (
        <>
          <svg className="w-6 fill-white" viewBox="0 0 496 496">
            <path
              d="M480,40V0h-48v40h-5.352C414.952,31.8,361.248,0,232,0C84.896,0,17.6,122.992,16.936,124.232l-16.704,31.32l28.52-21.128
				C84.688,93.008,150.376,72,224,72c130.192,0,193.144,76.24,193.768,77.008l2.4,2.992H432v344h16V152h16v344h16V152h16V40H480z
				 M448,16h16v24h-16V16z M480,72h-32v16h32v16h-32v16h32v16h-48v-16h-16v4.352C389.888,100.48,327.424,56,224,56
				c-61.72,0-118.16,14.128-168.344,42.064C85.544,63.88,143.256,16,232,16c119.848,0,171.904,28.328,184,36.152V104h16V56h48V72z"
            />
            <path
              d="M168,104C70.656,104,0,171.288,0,264c0,56.72,25.528,118.856,65.872,160.312C29.032,427.432,0,458.368,0,496h16
				c0-30.872,25.128-56,56-56h11.168c24.728,19.776,53.608,32,84.832,32s60.104-12.224,84.832-32H264c30.872,0,56,25.128,56,56h16
				c0-37.632-29.032-68.568-65.872-71.688C310.472,382.856,336,320.72,336,264C336,171.288,265.344,104,168,104z M168,456
				C83.808,456,16,350.96,16,264c0-83.44,63.92-144,152-144s152,60.56,152,144C320,350.96,252.192,456,168,456z"
            />
            <path
              d="M168,136c-61.76,0-112,50.24-112,112c0,16.72,2.44,33.296,7.232,49.28l25.008,83.376C98.896,416.16,130.944,440,168,440
				c37.056,0,69.104-23.84,79.76-59.344l25.008-83.368C277.56,281.296,280,264.72,280,248C280,186.24,229.76,136,168,136z
				 M257.44,292.688l-25.008,83.376C223.832,404.736,197.928,424,168,424s-55.832-19.264-64.432-47.936L78.56,292.68
				C74.208,278.184,72,263.16,72,248c0-52.936,43.064-96,96-96c52.936,0,96,43.064,96,96C264,263.16,261.792,278.184,257.44,292.688
				z"
            />
            <path
              d="M168,304c-17.648,0-32,14.352-32,32v32c0,17.648,14.352,32,32,32s32-14.352,32-32v-32C200,318.352,185.648,304,168,304z
				 M184,368c0,8.824-7.176,16-16,16c-8.824,0-16-7.176-16-16v-32c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V368z"
            />
            <path
              d="M160,240v-8H80v8c0,22.056,17.944,40,40,40C142.056,280,160,262.056,160,240z M120,264c-10.432,0-19.328-6.688-22.632-16
				H112c0,4.416,3.584,8,8,8s8-3.584,8-8h14.632C139.328,257.312,130.432,264,120,264z"
            />
            <path
              d="M176,240c0,22.056,17.944,40,40,40c22.056,0,40-17.944,40-40v-8h-80V240z M208,248c0,4.416,3.584,8,8,8s8-3.584,8-8
				h14.632c-3.304,9.312-12.2,16-22.632,16s-19.328-6.688-22.632-16H208z"
            />
            <polygon points="160,496 176,496 176,472 168,472 160,472 			" />
          </svg>
        </>
      )
    },
    texts: [
      "Vous êtes peut-être fatigué ou stressé, prenez soin de vous",
      "Vous ferez mieux de consulter un médecin ou un spécialiste psychologique",
      "Faites attention, vous risquez un grave danger",
    ],
    theme: "black",
  },
  love: {
    Icon: () => {
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </>
      )
    },
    texts: [
      "Vous trouverez votre compagnon idéal, soyez patient",
      "Vous avez de la chance d'avoir une partenaire aussi belle, ne la trompez pas",
      "Wow félicitation en avance ! Tu vas être un super papa !",
    ],
    theme: "valentine",
  },
}

const Whiteboard = () => {
  const { t } = useTranslation()
  let [searchParams, setSearchParams] = useSearchParams()
  let room = searchParams.get("room")
  const { socket, connected } = useSocket("/")
  let lastBroadcastedOrReceivedSceneVersion = useRef(-1)
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI>()
  const [elementSize, setElementSize] = useState(0)
  const [elements2, setElements] = useState([])
  const [shouldUpdate, setShouldUpdate] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
  const [type, setType] = useState("")
  const [theme, setTheme] = useState("light")
  const [playSoundSuccess] = useSound(lightSong)

  const handleTypeChoosed = useCallback((event: any) => {
    // TO DO
    playSoundSuccess()

    // * change theme mockup
    ref_white.current.setAttribute(
      "data-theme",
      event.currentTarget.getAttribute("data-theme")
    )

    setType(event.currentTarget.getAttribute("data-key"))
  }, [])
  const topRightDivRef = useRef<any>()

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light")
    function onThemeChanged() {
      setTheme(
        (localStorage.getItem("theme") ?? "light") !== "light"
          ? "dark"
          : "light"
      )
    }
    window.addEventListener("themeChanged", onThemeChanged)
    return () => window.removeEventListener("themeChanged", onThemeChanged)
  }, [])

  useEffect(() => {
    if (!excalidrawAPI) return

    excalidrawAPI.updateScene({ appState: { isLoading: isInitializing } })
  }, [isInitializing, excalidrawAPI])

  useEffect(() => {
    if (!socket || !room) return
    // console.log("ROOM listener");
    socket.on("should-join-room", () => {
      socket.emit("join-room", room)
    })
  }, [room, socket])

  useEffect(() => {
    if (!socket || !excalidrawAPI) return
    // console.log("UPDATE listener");
    socket.on("incoming-update", ({ elements, room, socketId }) => {
      // console.log(socketId, socket.id);
      if (socketId !== socket.id) {
        // console.log(elements);
        setShouldUpdate(true)
        setElements(elements)
        // console.log("RECEIVE 2");
      }
    })
  }, [socket, excalidrawAPI])
  useEffect(() => {
    if (!socket || !excalidrawAPI) return
    // console.log("UPDATE listener");
    socket.on("init-board", ({ elements, room, socketId }) => {
      setIsInitializing(false)
      setShouldUpdate(true)
      setElements(elements)
    })
  }, [socket, excalidrawAPI])

  useEffect(() => {
    if (!excalidrawAPI || !shouldUpdate) return
    setShouldUpdate(false)
    excalidrawAPI.updateScene({ elements: elements2, commitToHistory: false })
    excalidrawAPI.history.clear()
    lastBroadcastedOrReceivedSceneVersion.current = getSceneVersion(elements2)
  }, [elements2, excalidrawAPI, shouldUpdate])

  useEffect(() => {
    if (!searchParams) return
    if (!(room && validate(room))) {
      const newSearchParams: any = {}
      for (const [key, value] of searchParams.entries() as any) {
        // each 'entry' is a [key, value] tupple
        newSearchParams[key] = value
      }
      newSearchParams["room"] = uuid()
      setSearchParams(newSearchParams, {
        replace: true,
        state: "",
      })
    }
  }, [room, searchParams, setSearchParams])

  const broadcastElements = (elements: readonly ExcalidrawElement[]) => {
    const currentVersion = getSceneVersion(elements)
    if (currentVersion > lastBroadcastedOrReceivedSceneVersion.current) {
      // console.log("SEND");
      socket.emit("update", { elements, room, version: currentVersion })
      lastBroadcastedOrReceivedSceneVersion.current = currentVersion
    }
  }

  const ref_white = useRef() as any
  const [result, setResult] = useState("")

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  }

  const predConfetti = () => {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 3,
      shapes: ["text"],
      shapeOptions: {
        text: {
          value: ["☀️", "🪄", "😮", "🌞", "🧙", "😧"],
        },
      },
    })
  }
  const predShoot = () => {
    setTimeout(predConfetti, 0)
    setTimeout(predConfetti, 100)
    setTimeout(predConfetti, 200)
  }

  const handlePredire = useCallback(() => {
    //PREDIRE HERE
    // * translate the whiteboard
    ref_white.current.classList.add("sm:translate-x-[-35%]")
    ref_white.current.classList.add("translate-x-[-80%]")
    const textToShow =
      dreams[type].texts[Math.floor(Math.random() * dreams[type].texts.length)]
    setResult(textToShow)
    predShoot()
  }, [dreams, type])

  const goBack = () => {
    ref_white.current.classList.remove("sm:translate-x-[-35%]")
    ref_white.current.classList.remove("translate-x-[-80%]")
  }
  const topUIRender = useCallback(() => {
    return (
      <>
        {
          <div
            ref={topRightDivRef}
            className={elementSize !== 0 ? "" : "hidden"}
          >
            <button
              onClick={handlePredire}
              className="btn sm:btn-medium btn-xs"
            >
              Predire
            </button>
          </div>
        }
      </>
    )
  }, [elementSize, topRightDivRef, handlePredire])

  return (
    <div className="px-[5%]">
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <div className="w-2/3 sm:w-full">
            <h1 className="text-2xl sm:text-5xl font-app text-secondary">
              {t("advice_title")}
            </h1>
          </div>
          <div className="mr-5 flex items-center">
            <label className="opacity-80 text-xs sm:text-sm">
              {t("advice_help")}
            </label>
          </div>
        </div>
        <div className="relative">
          <div
            data-theme="dark"
            ref={ref_white}
            className="mockup-window border bg-base-200 sm:mt-3 mt-0 duration-300 z-20"
          >
            <div className="flex justify-center px-4 pb-4 bg-bage-200">
              <div className="sm:h-[70vh] h-96 w-full relative">
                <Excalidraw
                  renderTopRightUI={topUIRender}
                  theme={theme}
                  ref={(api: any) => setExcalidrawAPI(api)}
                  langCode={t("langCode") ?? "fr-FR"}
                  onChange={(element) => {
                    setElementSize(excalidrawAPI!.getSceneElements().length)
                    if (excalidrawAPI && !isInitializing) {
                      debounce(() => {
                        broadcastElements(
                          excalidrawAPI.getSceneElementsIncludingDeleted()
                        )
                      }, 300)()
                    }
                  }}
                >
                  {elements2.length === 0 && <WhiteboardWelcomeScreen />}
                  <WhiteboardMenu />
                </Excalidraw>
                {!type && (
                  <div className="absolute top-0 left-0 w-full h-full z-50 backdrop-blur-sm flex flex-col gap-2 justify-center items-center">
                    <div className="space-y-5">
                      <div>
                        <label className="font-app text-xl opacity-90">
                          {t("advice_description")}
                        </label>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        {Object.entries(dreams).map(
                          ([dream, { Icon, theme }]: any, index: number) => {
                            return (
                              <button
                                onClick={handleTypeChoosed}
                                key={index}
                                data-key={dream}
                                data-theme={theme}
                                className={
                                  dream === "good"
                                    ? "bg-green-500 font-app p-4 rounded-box capitalize flex items-center justify-center gap-2"
                                    : dream === "love"
                                    ? "bg-red-500 text-white p-4 font-app rounded-box capitalize flex items-center justify-center gap-2"
                                    : dream === "bad"
                                    ? "bg-black p-4 font-app rounded-box capitalize flex items-center justify-center gap-2"
                                    : ""
                                }
                              >
                                <Icon />
                                {dream}
                              </button>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* result */}
          <div className="absolute top-0 flex justify-end p-5 w-full h-full z-10">
            <div className="space-y-5">
              <div>
                <h1 className="text-primary text-lg sm:text-xl sm:text-5xl font-app">
                  {t("predict")}
                </h1>
              </div>

              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mx-auto text-base"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-lg sm:text-2xl italic font-app text-gray-900">
                    {result}
                  </p>
                </blockquote>
              </div>
              <div className="flex justify-end">
                <button onClick={goBack} className="btn btn-sm">
                  Retour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whiteboard
