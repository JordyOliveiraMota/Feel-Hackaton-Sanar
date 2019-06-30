import * as React from "react";
import { View } from "react-native";

import Svg,{
    Circle,
    G,
    Path,
    Ellipse
} from 'react-native-svg';

export default class Baby extends React.Component {

  render() {
    return (
        <View style={{marginBottom: '16%'}}>
            <Svg viewBox="0 0 512.003 512.003" width="90px" height="90px">
                <Circle fill="#F5D7B7" cx="264.171" cy="58.115" r="50.622"/>
                <Circle fillOpacity="0.1" cx="264.171" cy="58.115" r="50.622"/>
                <Circle fill="#F5D7B7" cx="453.886" cy="247.83" r="50.622"/>
                <Circle fillOpacity="0.1" cx="453.886" cy="247.83" r="50.622"/>
                <Circle fill="#38649C" cx="105.064" cy="406.937" r="97.512"/>
                <Path fillOpacity="0.1" d="M174.02,475.891c38.083-38.083,38.083-99.827,0-137.909
                    c-38.083-38.083-99.827-38.083-137.909,0c-15.065,15.065-24.145,33.835-27.291,53.376c7.937,5.645,19.03,11.116,34.061,16.931
                    c12.696,4.911,28.211,10.009,45.766,15.067c5.058,17.556,10.156,33.069,15.067,45.766c5.814,15.032,11.285,26.125,16.93,34.061
                    C140.185,500.036,158.956,490.956,174.02,475.891z"/>
                <Ellipse fill="#F5D7B7" cx="355.588" cy="156.401" rx="149.457" ry="146.187"/>
                <G>
                    
                        <Ellipse fill="#F28B74" cx="292.846" cy="105.142" rx="23.688" ry="29.745"/>
                    
                        <Ellipse fill="#F28B74" cx="406.863" cy="219.155" rx="23.688" ry="29.745"/>
                </G>
                <Path fillOpacity="0.05" d="M315.892,14.899c-23.231,6.966-45.208,19.681-63.663,38.136
                    c-58.365,58.365-59.4,151.961-2.311,209.05c33.1,33.1,78.472,46.657,122.133,40.834C278.883,271.977,250.349,116.408,315.892,14.899
                    z"/>
                <Path fill="#76B7EB" d="M133.91,221.872c59.515,0.713,194.021,14.883,271.459,55.306
                    c12.084,6.309,17.55,20.599,12.759,33.361c-12.145,32.359-44.197,80.173-73.535,108.937c-14.832,14.543-35.192,22.121-55.931,20.942
                    c-81.841-4.653-262.418-46.22-275.574-73.159c-13.364-27.363,28.616-97.77,78.794-132.65
                    C104.19,226.052,118.919,221.692,133.91,221.872z"/>
                <Path fillOpacity="0.1" d="M133.91,221.872c59.515,0.713,194.021,14.883,271.459,55.306
                    c12.084,6.309,17.55,20.599,12.759,33.361c-12.145,32.359-44.197,80.173-73.535,108.937c-14.832,14.543-35.192,22.121-55.931,20.942
                    c-81.841-4.653-262.418-46.22-275.574-73.159c-13.364-27.363,28.616-97.77,78.794-132.65
                    C104.19,226.052,118.919,221.692,133.91,221.872z"/>
                <Path fillOpacity="0.1" d="M91.88,234.609c-12.861,8.94-25.179,20.216-36.169,32.501
                    c5.077,37.411,13.818,82.412,24.457,124.714c0.726,2.888,1.457,5.729,2.19,8.543c62.995,19.293,153.364,36.873,205.265,39.987
                    c2.226-2.86,4.366-5.753,6.396-8.674c10.935-15.733,16.592-34.347,16.358-53.83c-0.31-25.891-3.734-79.303-13.798-136.741
                    c-62.144-13.357-126.363-18.801-162.671-19.236C118.919,221.692,104.19,226.052,91.88,234.609z"/>
                <Path fill="#76B7EB" d="M290.13,378.093c-0.713-59.515-14.883-194.021-55.307-271.459
                    c-6.308-12.085-20.599-17.55-33.361-12.759c-32.359,12.145-80.173,44.197-108.937,73.535
                    c-14.543,14.832-22.121,35.192-20.942,55.931c4.653,81.841,46.22,262.418,73.159,275.574c27.363,13.364,97.77-28.615,132.65-78.794
                    C285.949,407.812,290.31,393.083,290.13,378.093z"/>
                <G>
                    <Path fillOpacity="0.1" d="M119.473,320.952c-3.502,0.001-6.633-2.465-7.346-6.03c-0.621-3.103-3.521-22.094-3.521-25.77
                        c0-4.143,3.358-7.499,7.499-7.499c4.128,0,7.475,3.334,7.499,7.455c0.083,2.419,2.502,19.232,3.229,22.873
                        c0.812,4.062-1.822,8.012-5.884,8.824C120.455,320.905,119.96,320.952,119.473,320.952z M123.605,289.152h0.01H123.605z"/>
                    <Path fillOpacity="0.1" d="M198.705,188.673c-0.79,0-1.594-0.125-2.386-0.389c-3.929-1.311-6.045-5.581-4.735-9.51
                        c0.538-1.611,1.987-4.662,5.247-11.335c0.895-1.834,1.742-3.565,2.049-4.244c1.71-3.772,6.153-5.442,9.925-3.737
                        c3.773,1.709,5.447,6.152,3.738,9.926c-0.397,0.877-1.208,2.537-2.235,4.639c-1.422,2.91-4.068,8.327-4.511,9.541
                        C204.752,186.701,201.838,188.673,198.705,188.673z"/>
                    <Path fillOpacity="0.1" d="M232.572,330.501c-1.279,0-2.574-0.327-3.759-1.015c-3.557-2.065-13.492-7.746-16.706-9.21
                        c-3.77-1.717-5.434-6.165-3.716-9.934c1.717-3.768,6.165-5.43,9.933-3.716c4.466,2.034,16.646,9.09,18.02,9.888
                        c3.582,2.08,4.8,6.669,2.72,10.251C237.672,329.164,235.158,330.501,232.572,330.501z"/>
                    <Path fillOpacity="0.1" d="M182.693,452.575c-4.142,0-7.499-3.357-7.499-7.499c0-4.002-1.046-19.113-1.549-26.377
                        c-0.163-2.343-0.285-4.112-0.331-4.884c-0.247-4.135,2.905-7.686,7.038-7.933c4.137-0.26,7.686,2.904,7.934,7.038
                        c0.044,0.749,0.164,2.468,0.321,4.742c0.767,11.076,1.585,23.242,1.585,27.413C190.192,449.218,186.835,452.575,182.693,452.575z"
                        />
                    <Path fillOpacity="0.1" d="M326.472,325.728c-3.092,0-5.988-1.927-7.073-5.01c-1.376-3.906,0.675-8.189,4.581-9.564
                        c2.769-0.977,9.304-4.893,13.629-7.483c6.359-3.811,8.472-5.037,10.586-5.46c4.064-0.815,8.013,1.819,8.827,5.88
                        c0.762,3.802-1.497,7.507-5.12,8.633c-1.093,0.522-4.249,2.414-6.583,3.814c-5.699,3.415-12.158,7.285-16.354,8.763
                        C328.14,325.59,327.299,325.728,326.472,325.728z M351.151,312.915c-0.003,0.001-0.006,0.002-0.009,0.002
                        C351.145,312.916,351.148,312.915,351.151,312.915z"/>
                </G>
                <Path d="M412.826,167.01c-5.785,0-11.224,2.253-15.315,6.344c-2.929,2.929-2.928,7.677,0,10.605
                    c2.93,2.928,7.677,2.929,10.606-0.001c1.258-1.258,2.93-1.95,4.709-1.95c1.779,0,3.451,0.692,4.709,1.951
                    c1.258,1.258,1.951,2.93,1.951,4.708c0,1.779-0.693,3.451-1.951,4.71c-2.929,2.929-2.928,7.677,0,10.605
                    c1.465,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.304-2.197c4.091-4.091,6.343-9.529,6.343-15.314
                    c0-5.785-2.253-11.224-6.343-15.313C424.05,169.261,418.612,167.01,412.826,167.01z M338.65,83.86
                    c-8.445-8.442-22.185-8.442-30.629,0c-2.929,2.93-2.929,7.677,0,10.606c2.929,2.928,7.677,2.928,10.605,0
                    c2.596-2.598,6.82-2.597,9.417-0.001c2.597,2.597,2.597,6.821,0,9.417c-2.929,2.93-2.929,7.677,0,10.606
                    c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.196C347.094,106.047,347.094,92.306,338.65,83.86z M499.552,211.906
                    c7.241-17.967,11.147-37.244,11.366-57.052c0.431-38.973-13.418-75.605-39.145-103.978c7.63-7.229,16.943-12.58,27.045-15.515
                    c3.978-1.155,6.266-5.316,5.11-9.293c-1.155-3.978-5.317-6.265-9.293-5.11c-12.521,3.637-24.052,10.302-33.466,19.31
                    c-28.381-25.748-65.042-39.595-104.02-39.184c-19.808,0.219-39.085,4.125-57.05,11.365C289.875,4.381,277.321,0,264.171,0
                    c-0.292,0-0.586,0.002-0.879,0.006c-15.189,0.226-29.471,6.266-40.215,17.011c-18.263,18.262-22.033,45.629-10.609,67.682
                    c-4.532-0.207-9.164,0.475-13.641,2.157c-33.559,12.596-82.604,45.673-111.657,75.306c-15.965,16.282-24.375,38.737-23.075,61.607
                    c0.382,6.713,1.019,14.166,1.884,22.198c-19.66,18.208-37.458,41.194-49.166,63.613C9.047,324.452-2.64,352.15,6.347,370.551
                    c0.035,0.072,0.072,0.146,0.109,0.223c-14.087,38.388-4.74,81.33,24.351,110.421c20.13,20.132,46.891,30.81,74.19,30.808
                    c12.148,0,24.404-2.124,36.226-6.46c0.075,0.038,0.152,0.079,0.227,0.115c4.401,2.149,9.654,3.206,15.612,3.206
                    c14.81,0,33.949-6.535,55.019-19.067c19.497-11.597,38.471-27.102,53.925-43.764c8.062,0.866,15.526,1.498,22.228,1.88
                    c1.544,0.088,3.084,0.131,4.622,0.131c21.248,0,41.801-8.318,56.985-23.205c16.983-16.652,35.584-40.27,51.036-64.8
                    c2.208-3.504,1.156-8.134-2.348-10.342c-3.505-2.208-8.135-1.157-10.342,2.349c-14.857,23.584-32.66,46.212-48.846,62.083
                    c-13.276,13.015-31.594,19.88-50.255,18.809c-3.522-0.2-7.275-0.475-11.222-0.818c1.995-2.565,3.898-5.138,5.687-7.71
                    c9.412-13.54,14.28-29.585,14.079-46.399c-0.342-28.584-3.903-77.794-12.869-130.184c-0.087-0.512-0.18-1.037-0.27-1.554
                    c48.317,9.682,88.748,22.601,117.408,37.561c8.697,4.541,12.656,14.892,9.208,24.078c-1.665,4.435-3.769,9.287-6.253,14.425
                    c-1.803,3.73-0.242,8.213,3.487,10.017c1.052,0.509,2.164,0.75,3.26,0.75c2.786,0,5.463-1.56,6.756-4.236
                    c2.683-5.548,4.968-10.824,6.792-15.685c1.68-4.476,2.362-9.106,2.155-13.636c8.358,4.33,17.477,6.484,26.579,6.484
                    c14.91,0,29.765-5.759,41.104-17.098c10.744-10.745,16.786-25.027,17.011-40.217C512.195,235.243,507.8,222.357,499.552,211.906z
                    M233.683,27.623c13.733-13.734,34.194-16.355,50.517-7.712c-13.524,7.3-26.08,16.626-37.274,27.82
                    c-8.478,8.478-15.912,17.786-22.231,27.795C217.615,59.601,220.763,40.543,233.683,27.623z M41.414,470.587
                    c-23.283-23.283-31.809-56.919-23.008-88.065c11.426,7.352,34.147,17.58,80.569,30.511c5.518,19.778,11.106,37.137,16.456,51.031
                    c5.431,14.102,10.111,23.354,14.103,29.518C98.373,502.408,64.711,493.884,41.414,470.587z M271.236,415.841
                    c-15.819,22.757-40.798,45.583-66.82,61.06c-24.379,14.5-45.982,20.351-56.381,15.275c-0.232-0.113-0.48-0.266-0.741-0.451
                    c-0.277-0.264-0.572-0.504-0.884-0.721c-6.151-5.635-18.426-28.62-34.025-85.695c-0.051-0.228-0.113-0.452-0.184-0.673
                    c-1.771-6.499-3.585-13.436-5.437-20.837c-1.006-4.018-5.076-6.462-9.096-5.455c-4.018,1.005-6.46,5.078-5.455,9.095
                    c0.737,2.947,1.479,5.843,2.223,8.711c-56.927-16.504-70.582-27.35-73.744-30.972c-0.048-0.06-0.1-0.117-0.15-0.175
                    c-0.431-0.516-0.631-0.864-0.716-1.037c-7.989-16.358,11.774-61.98,48.435-99.324c3.58,26.48,9.08,57.257,15.888,88.354
                    c0.886,4.047,4.886,6.605,8.93,5.723c4.046-0.886,6.607-4.884,5.723-8.929c-10.587-48.361-17.963-95.791-19.729-126.876
                    c-1.061-18.665,5.795-36.981,18.81-50.255c27.748-28.302,74.404-59.824,106.217-71.765c9.186-3.45,19.537,0.51,24.078,9.208
                    c11.833,22.668,27.9,68.598,39.522,127.179c0.042,0.685,0.173,1.351,0.392,1.983c8.091,41.345,13.943,88.871,14.542,138.916
                    C282.796,391.859,278.855,404.881,271.236,415.841z M419.87,279.652c-2.92-3.687-6.631-6.824-11.03-9.121
                    c-31.514-16.45-74.306-29.941-127.249-40.123c-7.684-39.817-20.336-89.35-40.117-127.244c-2.297-4.399-5.435-8.11-9.121-11.031
                    c6.665-12.381,15.113-23.728,25.18-33.795c55.35-55.35,144.37-56.385,198.444-2.311c26.172,26.172,40.358,61.21,39.944,98.66
                    c-0.212,19.134-4.229,37.726-11.666,54.915c-0.228,0.412-0.416,0.84-0.56,1.28c-7.118,16.015-17.223,30.784-30.029,43.589
                    C443.598,264.538,432.251,272.986,419.87,279.652z M484.38,278.32c-12.92,12.921-31.98,16.069-47.904,8.988
                    c10.009-6.32,19.316-13.753,27.795-22.231c11.194-11.194,20.52-23.75,27.821-37.274C500.734,244.124,498.112,264.588,484.38,278.32z
                    M366.486,158.76c-3.592,0.24-7.104-1.066-9.641-3.603c-2.537-2.536-3.85-6.051-3.603-9.641c0.284-4.132-2.836-7.711-6.967-7.995
                    c-4.139-0.271-7.711,2.836-7.996,6.968c-0.544,7.917,2.358,15.672,7.961,21.274c5.158,5.156,12.136,8.023,19.387,8.023
                    c0.627,0,1.256-0.021,1.886-0.064c4.133-0.284,7.251-3.864,6.968-7.995C374.197,161.595,370.62,158.483,366.486,158.76z"/>
            </Svg>
        </View>
    );
  }
}
